import RedGPUContext from "../../context/RedGPUContext";
import TypeSize from "../../resource/buffers/TypeSize";
import BitmapCubeTexture from "../../resource/texture/BitmapCubeTexture";
import TextureSampler from "../../resource/texture/TextureSampler";
import BaseMaterial from "../BaseMaterial";
import fragmentSource from './fragment.wgsl';
import vertexSource from './vertex.wgsl';

const fragmentUniformBufferDescriptor = [
	{size: TypeSize.float32, valueName: 'opacity'},
]
const fragmentUniformBindGroupLayoutDescriptor: GPUBindGroupLayoutDescriptor = {
	entries: [
		{
			binding: 0,
			visibility: GPUShaderStage.FRAGMENT,
			buffer: {
				type: 'uniform',
			},
		},
		{
			binding: 1,
			visibility: GPUShaderStage.FRAGMENT,
			sampler: {
				type: 'filtering',
			},
		},
		{
			binding: 2,
			visibility: GPUShaderStage.FRAGMENT,
			texture: {
				viewDimension: 'cube'
			}
		}
	]
};

class SkyBoxMaterial extends BaseMaterial {
	#texture: BitmapCubeTexture
	#sampler: TextureSampler

	/**
	 *
	 * @param redGPUContext
	 * @param texture
	 */
	constructor(redGPUContext: RedGPUContext, texture: BitmapCubeTexture) {
		super(
			redGPUContext,
			vertexSource, fragmentSource,
			fragmentUniformBufferDescriptor,
			fragmentUniformBindGroupLayoutDescriptor
		)
		const gpuDevice = this.redGPUContext.gpuDevice
		this.#sampler = new TextureSampler(redGPUContext, {magFilter: 'linear', minFilter: 'linear',})
		this.#initFragmentUniformInfo(gpuDevice)
		this.texture = texture
		// console.log(this)
	}

	get texture(): BitmapCubeTexture {
		return this.#texture;
	}

	set texture(value: BitmapCubeTexture) {
		this.#texture = value;
		if (this.#texture) {
			this.#texture.addTargetMaterial(this)
		}
		this.dirtyTexture = true
	}

	updateBindGroup() {
		if (this.dirtyTexture) {
			this.updateFragmentUniformBindGroup({
				layout: this.renderInfo_FragmentUniformsBindGroupLayout,
				entries: [
					{
						binding: 0,
						resource: {
							buffer: this.fragmentUniformBuffer.gpuBuffer,
							offset: 0,
							size: this.fragmentUniformBuffer.gpuBufferSize
						}
					},
					{
						binding: 1,
						resource: this.#sampler.gpuSampler,
					},
					{
						binding: 2,
						resource: this.#texture?.gpuTextureView || (this.redGPUContext.resourceManager.emptyCubeTextureInfo.textureView)
					}
				]
			})
			this.dirtyTexture = false
		}
	}

	/**
	 *
	 * @param gpuDevice
	 * @private
	 */
	#initFragmentUniformInfo(gpuDevice: GPUDevice) {
		this.updateBindGroup()
	}
}

export default SkyBoxMaterial
