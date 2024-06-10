import RedGPUContext from "../context/RedGPUContext";
import RedGPUContextBase from "../context/RedGPUContextBase";
import {View} from "../main/view";
import VertexBuffer from "../resource/buffers/buffer/VertexBuffer";
import InterleaveInfo from "../resource/buffers/interleaveInfo/InterleaveInfo";
import InterleaveUnit from "../resource/buffers/interleaveInfo/InterleaveUnit";
import {TextureSampler} from "../resource/texture";
import PostEffectBase from "./PostEffectBase";

/**
 * PostEffect 를 관리하는 매니저
 */
class PostEffectManager extends RedGPUContextBase {
	#vertexBuffer: VertexBuffer
	#sampler: TextureSampler
	#children: PostEffectBase[] = [];
	#view: View

	/**
	 * 생성자
	 * @param view
	 */
	constructor(view: View) {
		super(view.redGPUContext);
		this.#view = view
		this.#init(view.redGPUContext)
	}

	get vertexBuffer(): VertexBuffer {
		return this.#vertexBuffer;
	}

	get sampler(): TextureSampler {
		return this.#sampler;
	}

	get children(): PostEffectBase[] {
		return this.#children;
	}

	get view(): View {
		return this.#view;
	}

	render() {
		// console.log('PostEffect Render')
		let lastSourceTextureView: GPUTextureView = this.#view.resolveTextureView
		let startTime: number
		let endTime: number
		this.#children.forEach((effect: PostEffectBase) => {
			startTime = performance.now()
			lastSourceTextureView = effect.render(this, lastSourceTextureView)
			endTime = performance.now()
			// console.log(endTime - startTime)
			effect.effectRenderTime = (endTime - startTime)
			startTime = endTime
		})
		return lastSourceTextureView
	}

	/**
	 * 포스트 이펙트를 추가합니다.
	 * @param postEffect
	 */
	addEffect(postEffect: PostEffectBase) {
		this.#children.push(postEffect)
	}

	/**
	 * 포스트 이펙트를 제거합니다.
	 * @param postEffect
	 */
	removeEffect(postEffect: PostEffectBase) {
		const index = this.#children.indexOf(postEffect)
		if (index > -1) {
			this.#children.splice(index, 1);
		}
	}

	#init(redGPUContext: RedGPUContext) {
		this.#vertexBuffer = new VertexBuffer(
			redGPUContext,
			new Float32Array(
				[
					//x,y,z, u,v
					-1.0, -1.0, 0.0, 0.0, 1.0,
					1.0, -1.0, 0.0, 1.0, 1.0,
					-1.0, 1.0, 0.0, 0.0, 0.0,
					-1.0, 1.0, 0.0, 0.0, 0.0,
					1.0, -1.0, 0.0, 1.0, 1.0,
					1.0, 1.0, 0.0, 1.0, 0.0
				]
			),
			new InterleaveInfo(
				[
					new InterleaveUnit(InterleaveUnit.VERTEX_POSITION, "float32x3"),
					new InterleaveUnit(InterleaveUnit.TEXCOORD, 'float32x2')
				]
			),
		);
		this.#sampler = new TextureSampler(redGPUContext, {
			magFilter: "linear",
			minFilter: "linear",
			mipmapFilter: "nearest"
		});
	}
}

export default PostEffectManager