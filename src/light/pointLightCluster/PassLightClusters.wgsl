#REDGPU_DEFINE_SYSTEM_UNIFORMS
@group(1) @binding(0) var<storage> clusters : PointLight_Clusters;

fn pointLight_testSphereAABB( light:u32,  tile:u32) -> bool{
        var radius:f32 = pointLightList.lights[light].radius;
       var center:vec3<f32>  = (systemUniforms.cameraMatrix *  vec4<f32>(pointLightList.lights[light].position, 1.0)).xyz;
       var  squaredDistance:f32 = pointLight_sqDistPointAABB(center, tile, clusters.cubeList[tile].minAABB.xyz, clusters.cubeList[tile].maxAABB.xyz);

       return squaredDistance <= (radius * radius);
   }
fn pointLight_sqDistPointAABB(targetPoint:vec3<f32>, tile:u32,minAABB : vec3<f32>, maxAABB : vec3<f32>) -> f32 {
    var sqDist = 0.0;
    // const minAABB : vec3<f32> = clusters.cubeList[tileIndex].minAABB;
    // const maxAABB : vec3<f32> = clusters.cubeList[tileIndex].maxAABB;
    // Wait, does this actually work? Just porting code, but it seems suspect?
//    clusters.cubeList[tile].maxAABB[3] = f32(tile);
    for(var i = 0; i < 3; i = i + 1) {
      let v = targetPoint[i];
      if(v < minAABB[i]){
        sqDist = sqDist + (minAABB[i] - v) * (minAABB[i] - v);
      }
      if(v > maxAABB[i]){
        sqDist = sqDist + (v - maxAABB[i]) * (v - maxAABB[i]);
      }
    }
    return sqDist;
}

@compute @workgroup_size(REDGPU_DEFINE_WORKGROUP_SIZE_X,REDGPU_DEFINE_WORKGROUP_SIZE_Y, REDGPU_DEFINE_WORKGROUP_SIZE_Z)
fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {
    let tileIndex = global_id.x +
                    global_id.y * pointLight_tileCount.x +
                    global_id.z * pointLight_tileCount.x * pointLight_tileCount.y;
    var clusterLightCount = 0u;
    var cluserPointLightIndices : array<u32, REDGPU_DEFINE_MAX_LIGHTS_PER_CLUSTERu>;
    for (var i = 0u; i < u32(pointLightList.count[0]); i = i + 1u) {
        var  radius:f32 = pointLightList.lights[i].radius;
        // PointLights without an explicit radius affect every cluster, but this is a poor way to handle that.
        var lightInCluster = radius <= 0.0;
//        if (!lightInCluster) {
//            let pointLightViewPos = systemUniforms.cameraMatrix * vec4<f32>(pointLightList.lights[i].position, 1.0);
//            let sqDist = pointLight_sqDistPointAABB(pointLightViewPos.xyz,tileIndex, clusters.cubeList[tileIndex].minAABB.xyz, clusters.cubeList[tileIndex].maxAABB.xyz);
//            lightInCluster = sqDist <= (radius * radius);
//        }
        lightInCluster = pointLight_testSphereAABB(i,tileIndex);
        if (lightInCluster) {
            // PointLight affects this cluster. Add it to the list.
            cluserPointLightIndices[clusterLightCount] = i;
            clusterLightCount = clusterLightCount + 1u;
        }
        if (clusterLightCount == REDGPU_DEFINE_MAX_LIGHTS_PER_CLUSTERu) {
         break;
        }
    }
    var offset = atomicAdd(&clusterLightGroup.offset, clusterLightCount);
    for(var i = 0u; i < clusterLightCount; i = i + 1u) {
        clusterLightGroup.indices[offset + i] = cluserPointLightIndices[i];
    }
    clusterLightGroup.lights[tileIndex].offset = offset;
    clusterLightGroup.lights[tileIndex].count = clusterLightCount;
}