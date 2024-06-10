import View from "../main/view/View";
import RedGPUContextResourceManager from "../resource/resourceManager/RedGPUContextResourceManager";
import throwError from "../util/errorFunc/throwError";
import throwErrorInstanceOf from "../util/errorFunc/throwErrorInstanceOf";
import getConstructorName from "../util/getConstructorName";
import RedGPUContextDebugger from "./debugger/RedGPUContextDebugger";

/**
 * RedGPU.initialize 초기화 이후 성공했을때 생성되는 Context
 */
class RedGPUContext {
	dirtyMultiSample: boolean = false
	// --------------------------------------------------
	#gpuAdapter: GPUAdapter
	#gpuContext: GPUCanvasContext
	#gpuDevice: GPUDevice
	#configurationDescription: GPUCanvasConfiguration
	#alphaMode: GPUCanvasAlphaMode
	// --------------------------------------------------
	#debugger: RedGPUContextDebugger
	#useMultiSample: boolean = true
	#resourceManager: RedGPUContextResourceManager
	#htmlCanvas: HTMLCanvasElement;
	// --------------------------------------------------
	#renderScale: number = 1
	#width: number | string = '100%';
	#height: number | string = '100%';
	#pixelSizeInt: { width: number; height: number } = {width: 0, height: 0}
	// --------------------------------------------------
	#viewList: View[] = []

	/**
	 * @param {HTMLCanvasElement} htmlCanvas
	 * @param {GPUAdapter} gpuAdapter
	 * @param {GPUDevice} gpuDevice
	 * @param {GPUCanvasContext} gpuContext
	 * @param {GPUCanvasAlphaMode=} alphaMode
	 */
	constructor(
		htmlCanvas: HTMLCanvasElement,
		gpuAdapter: GPUAdapter,
		gpuDevice: GPUDevice,
		gpuContext: GPUCanvasContext,
		alphaMode: GPUCanvasAlphaMode = 'premultiplied'
	) {
		this.#gpuAdapter = gpuAdapter
		this.#gpuDevice = gpuDevice
		this.#gpuContext = gpuContext
		this.#debugger = new RedGPUContextDebugger(this)
		this.#resourceManager = new RedGPUContextResourceManager(this)
		this.#alphaMode = alphaMode
		this.#htmlCanvas = htmlCanvas
		window.addEventListener('resize', this.#resize);
		this.#configure()
		this.#resize()
	}

	/**
	 * @category gpu
	 */
	get gpuAdapter(): GPUAdapter {
		return this.#gpuAdapter;
	}

	/**
	 * @category gpu
	 */
	get gpuContext(): GPUCanvasContext {
		return this.#gpuContext;
	}

	/**
	 * @category gpu
	 */
	get gpuDevice(): GPUDevice {
		return this.#gpuDevice;
	}

	/**
	 * @category gpu
	 */
	get configurationDescription(): GPUCanvasConfiguration {
		return this.#configurationDescription;
	}

	/**
	 * @category gpu
	 */
	get alphaMode(): GPUCanvasAlphaMode {
		return this.#alphaMode;
	}

	get debugger(): RedGPUContextDebugger {
		return this.#debugger;
	}

	get useMultiSample(): boolean {
		return this.#useMultiSample;
	}

	set useMultiSample(value: boolean) {
		if (this.#useMultiSample !== value) this.dirtyMultiSample = true;
		this.#useMultiSample = value;
	}

	get resourceManager(): RedGPUContextResourceManager {
		return this.#resourceManager;
	}

	get htmlCanvas(): HTMLCanvasElement {
		return this.#htmlCanvas;
	}

	get renderScale(): number {
		return this.#renderScale;
	}

	set renderScale(value: number) {
		if (value <= 0) value = 0.01
		this.#renderScale = value;
		this.setSize()
	}

	/**
	 * @category size
	 * @defaultValue 100%
	 */
	get width(): number | string {
		return this.#width;
	}

	/**
	 * @category size
	 * @defaultValue 100%
	 */
	get height(): number | string {
		return this.#height;
	}

	/**
	 * @category size
	 */
	get pixelSizeInt(): { width: number; height: number } {
		return this.#pixelSizeInt;
	}

	get label(): string {
		return this.#gpuDevice.label
	}

	/**
	 * 소유한 View List 반환
	 * @readonly
	 */
	get viewList(): View[] {
		return this.#viewList;
	}

	/**
	 * destroy WebGPU device
	 * @example
	 * (RedGPUContext Instance).destroy()
	 */
	destroy() {
		this.#gpuContext.unconfigure()
		this.#gpuDevice.destroy()
	}

	/**
	 * addView
	 * RedGPU에서 렌더링할 View를 추가합니다.
	 *
	 * @example
	 * (RedGPUContext Instance).addView(View Instance)
	 *
	 * @category view management
	 * @param view
	 */
	addView(view: View) {
		if (!(view instanceof View)) throwErrorInstanceOf(this, 'view', 'View')
		this.#viewList.push(view)
		this.#setDirtyMultiSample()
	}

	/**
	 * TODO addViewAt
	 * @param view
	 * @param index
	 */
	addViewAt(view: View, index: number) {
		this.#setDirtyMultiSample()
	}

	/**
	 * RedGPU에서 View를 제거합니다.
	 *
	 * @example
	 * (RedGPUContext Instance).removeView(View Instance)
	 * @category view management
	 * @param view
	 */
	removeView(view: View) {
		if (!(view instanceof View)) throwErrorInstanceOf(this, 'view', 'View')
		const index = this.#viewList.indexOf(view)
		if (index > -1) this.#viewList.splice(index, 1)
		else {
			console.log('viewList 에 존재하지 않는 view 입니다.')
		}
		this.#setDirtyMultiSample()
	}

	/**
	 * TODO removeViewAt
	 * @param label
	 */
	removeViewAt(index: number) {
		//TODO
		this.#setDirtyMultiSample()
	}

	/**
	 * TODO removeViewByLabel
	 * @param label
	 */
	removeViewByLabel(label: string) {
		//TODO
		this.#setDirtyMultiSample()
	}

	/**
	 * setSize
	 * @param w
	 * @param h
	 */
	setSize(w = this.#width, h = this.#height) {
		this.#width = w;
		this.#height = h;
		let tW, tH;
		let rect: DOMRect = (this.#htmlCanvas.parentNode || document.body)['getBoundingClientRect']();
		// const devicePixelRatio = window['devicePixelRatio'] || 1;
		tW = this.#checkAbleValue('width', w, rect)
		tH = this.#checkAbleValue('height', h, rect)
		this.#htmlCanvas.width = tW * this.#renderScale;
		this.#htmlCanvas.height = tH * this.#renderScale;
		this.#htmlCanvas.style.width = tW + 'px';
		this.#htmlCanvas.style.height = tH + 'px';
		this.#pixelSizeInt.width = Math.floor(tW * this.#renderScale);
		this.#pixelSizeInt.height = Math.floor(tH * this.#renderScale);
		this.viewList.forEach(view => {
			view.setSize();
			// redView.setLocation();
		});
		console.log(`${getConstructorName(this)}.setSize - input : ${w},${h} / result : ${tW}, ${tH}`);
	}

	/**
	 * gpuContext configure method
	 * @private
	 */
	#configure() {
		const presentationFormat: GPUTextureFormat = navigator.gpu.getPreferredCanvasFormat();
		this.#configurationDescription = {
			device: this.#gpuDevice,
			format: presentationFormat,
			alphaMode: this.#alphaMode
		};
		console.log(`${getConstructorName(this)}.configurationDescription`, this.#configurationDescription);
		this.#gpuContext.configure(this.#configurationDescription);
	}

	/**
	 * window resize handler
	 * @private
	 */
	#resize = () => {
		this.setSize()
	}

	/**
	 * parameter value verification of setsize method.
	 * @param key
	 * @param value
	 * @param rect
	 * @private
	 */
	#checkAbleValue(key, value, rect) {
		let result
		const fireError = () => {
			this.setSize(0, 0)
			throwError(`${value}는 ${key}값으로 사용 될수 없습니다.`)
		}
		switch (typeof value) {
			case 'number':
				if (value >= 0) {
					result = value
					break
				}
				fireError()
				break;
			case 'string':
				if (value.includes('%')) {
					result = Math.floor(rect[key] * (+value.replace('%', '')) / 100)
					break
				}
				if (value.includes('px')) {
					result = +value.replace('px', '')
					break
				}
				fireError()
				break;
			default :
				fireError()
				break;
		}
		if (result < 0) result = 0;
		return result
	};

	#setDirtyMultiSample() {
		this.dirtyMultiSample = true
		window.dispatchEvent(new Event('changeViewList'))
	}
}

export default RedGPUContext