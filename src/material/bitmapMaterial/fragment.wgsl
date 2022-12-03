#REDGPU_DEFINE_FRAGMENT_BASE

struct MaterialUniforms {
    alpha : f32,
};

@group(2) @binding(0) var<uniform> materialUniforms : MaterialUniforms;
@group(2) @binding(1) var _sampler: sampler;
@group(2) @binding(2) var _texture: texture_2d<f32>;

struct InputData {
    @builtin(position) position : vec4<f32>,
    @location(0) vertexPosition : vec3<f32>,
    @location(1) vertexNormal : vec3<f32>,
    @location(2) uv : vec2<f32>,
};

@fragment

fn main(inputData:InputData) -> @location(0) vec4<f32> {
    var diffuseColor:vec4<f32> = textureSample(_texture,_sampler, inputData.uv);
    // result color
    diffuseColor = vec4<f32>(diffuseColor.rgb, diffuseColor.a * materialUniforms.alpha);
    if(diffuseColor.a == 0.0) {
     discard;
    }
    return diffuseColor;
}