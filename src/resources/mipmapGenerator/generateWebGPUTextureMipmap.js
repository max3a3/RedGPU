const  vertexSource = `
var<private> pos:array<vec2<f32>,4> = array<vec2<f32>,4>(
    vec2<f32>(-1.0, 1.0), vec2<f32>(1.0, 1.0),
    vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0)
);

struct VertexOutput {
    @builtin(position) position : vec4<f32>,
    @location(0) texCoord : vec2<f32>,
};

@vertex
fn main(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
    var output : VertexOutput;
    output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
    output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
    return output;
}

`
const fragmentSource =`
@binding(0) @group(0) var imgSampler : sampler;
@binding(1) @group(0) var img : texture_2d<f32>;
@fragment
fn main(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
    return textureSample(img, imgSampler, texCoord);
}
`

const generateWebGPUTextureMipmap = (gpuDevice, texture, textureDescriptor) => {
    console.log('generateWebGPUTextureMipmap')
    //TODO 재생성 안되게 처리
    const vShaderModule = gpuDevice.createShaderModule({
        code: vertexSource,
        label: 'vertex_generateWebGPUTextureMipmap'
    });
    const fShaderModule = gpuDevice.createShaderModule({
        code: fragmentSource,
        label: 'fragment_generateWebGPUTextureMipmap'
    });
    const pipelineDescriptor = {
        layout: gpuDevice.createPipelineLayout({
            // maxBindGroups의 영향을 받는다
            bindGroupLayouts: [
                gpuDevice.createBindGroupLayout({
                    entries: [
                        {
                            binding: 0,
                            visibility: GPUShaderStage.FRAGMENT,
                            sampler: {
                                type: 'filtering',
                            },
                        },
                        {
                            binding: 1,
                            visibility: GPUShaderStage.FRAGMENT,
                            texture: {}
                        }
                    ]
                })
            ]
        }),
        vertex: {
            module: vShaderModule,
            entryPoint: 'main',
        },
        fragment: {
            module: fShaderModule,
            entryPoint: 'main',
            targets: [{
                format: textureDescriptor.format // Make sure to use the same format as the texture
            }],
        },
        primitive: {
            topology: 'triangle-strip',
            stripIndexFormat: 'uint32',
        },
    }
    const pipeline = gpuDevice.createRenderPipeline(pipelineDescriptor);

    // We'll ALWAYS be rendering minified here, so that's the only filter mode we need to set.
    // const gpuSampler = sampler?.gpuSampler || gpuDevice.createSampler( {minFilter: 'linear'});
    const gpuSampler = gpuDevice.createSampler({minFilter: 'linear'});

    let srcView = texture.createView({
        baseMipLevel: 0,
        mipLevelCount: 1
    });

    // Loop through each mip level and renders the previous level's contents into it.
    const commandEncoder = gpuDevice.createCommandEncoder({});
    for (let i = 1; i < textureDescriptor.mipLevelCount; ++i) {
        const dstView = texture.createView({
            baseMipLevel: i,  // Make sure we're getting the right mip level...
            mipLevelCount: 1, // And only selecting one mip level
        });

        const passEncoder = commandEncoder.beginRenderPass({
            colorAttachments: [{
                view: dstView, // Render pass uses the next mip level as it's render attachment.
                clearValue: {r: 0.0, g: 0.0, b: 0.0, a: 0.0},
                loadOp: 'clear',
                storeOp: 'store'
            }],
        });

        // Need a separate bind group for each level to ensure
        // we're only sampling from the previous level.
        const bindGroup = gpuDevice.createBindGroup({
            layout: pipeline.getBindGroupLayout(0),
            entries: [{
                binding: 0,
                resource: gpuSampler,
            }, {
                binding: 1,
                resource: srcView,
            }],
        });

        // Render
        passEncoder.setPipeline(pipeline);
        passEncoder.setBindGroup(0, bindGroup);
        passEncoder.draw(4);
        passEncoder.end();

        // The source texture view for the next iteration of the loop is the
        // destination view for this one.
        srcView = dstView;
    }
    gpuDevice.queue.submit([commandEncoder.finish()]);
}
export default generateWebGPUTextureMipmap;
