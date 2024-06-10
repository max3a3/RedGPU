import * as dat from "dat.gui";
import RedGPUContextBase from "../RedGPUContextBase";
import setActiveDebugger from "./category/systemStatePanels/setActiveDebugger";
import setStatePanels from "./category/systemStatePanels/setStatePanels";
import debuggerRenderResourceManager from "./draw/debuggerRenderResourceManager";
import debuggerRenderViewList from "./draw/debuggerRenderViewList";
import gui_setItem from "./funcs/gui_setItem";
import gui_setItemBooleanNameSize from "./funcs/gui_setItemBooleanNameSize";
import gui_setItemDisableInput from "./funcs/gui_setItemDisableInput";

class RedGPUContextDebugger extends RedGPUContextBase {
	__gui_setItemDisableInput = gui_setItemDisableInput
	__gui_setItemBooleanNameSize = gui_setItemBooleanNameSize
	__gui_setItem = gui_setItem
	#gui;
	#activeViewDebugger: boolean = false
	#activeResourceDebugger: boolean = false
	#useDebugger: boolean = false
	#__temp_HD_ViewList
	#userDebugSet
	#adapterInfo = {}
	#dat = dat

	constructor(context) {
		super(context)
		this.#update()
	}

	get activeViewDebugger(): boolean {
		return this.#activeViewDebugger;
	}

	set activeViewDebugger(value: boolean) {
		this.#activeViewDebugger = value;
		let debugView = document.getElementById('___debugView___')
		if (value) {
			if (!debugView) {
				debugView = document.createElement('div')
				debugView.setAttribute('id', '___debugView___')
				debugView.style.cssText = `
                        position: absolute;
                        max-height: 100%;
                        bottom: 0;
                        left:0;
                        box-sizing: border-box;
                        background: rgba(0,0,0,0.5);
                        color : #fff;
                        font-size: 10px;
                        display: flex;
                        flex-direction: column;
                        gap : 4px;
                        overflow: hidden;
                        overflow-y:auto;
                    `
				document.body.appendChild(debugView)
			}
		} else {
			if (debugView) document.body.removeChild(debugView)
		}
	}

	get activeResourceDebugger(): boolean {
		return this.#activeResourceDebugger;
	}

	set activeResourceDebugger(value: boolean) {
		this.#activeResourceDebugger = value;
		let debugResource = document.getElementById('___debugResource___')
		if (value) {
			{
				if (!debugResource) {
					debugResource = document.createElement('div')
					debugResource.setAttribute('id', '___debugResource___')
					debugResource.style.cssText = `
                         position: absolute;
                    bottom: 0;
                    right: 0;
                    padding:16px;
                    background: rgba(0,0,0,0.5);
                    color : #fff;
                    font-size: 10px;
                    overflow-y: auto;
                    `
					document.body.appendChild(debugResource)
				}
			}
		} else {
			if (debugResource) document.body.removeChild(debugResource)
		}
	}

	get useDebugger(): boolean {
		return this.#useDebugger;
	}

	set useDebugger(value: boolean) {
		const redGPUContext = this.redGPUContext
		this.#useDebugger = value;
		if (value) {
			if (!this.#gui) {
				console.log(redGPUContext)
				const gui = this.#gui = new dat.GUI()
				this.#userDebugSet?.(gui, redGPUContext, this)
				setActiveDebugger(gui, this)
				setStatePanels(gui, redGPUContext, this, !this.userDebugSet)
				this.#gui.show()
			}
		} else {
			this.temp_HD_ViewList = null
			this.#gui.hide()
		}
		/////
	}

	get userDebugSet() {
		return this.#userDebugSet;
	}

	set userDebugSet(value) {
		this.#userDebugSet = value;
		if (this.#gui) {
			this.temp_HD_ViewList = null
			this.#gui.destroy()
			this.#gui = null
		}
		if (value && this.#useDebugger) this.useDebugger = true
	}

	set temp_HD_ViewList(value) {
		if (this.#__temp_HD_ViewList) window.removeEventListener('changeViewList', this.#__temp_HD_ViewList)
		this.#__temp_HD_ViewList = value;
	}

	get adapterInfo() {
		return this.#adapterInfo;
	}

	get limit() {
		return this.redGPUContext.gpuAdapter.limits
	}

	get dat(): any {
		return this.#dat;
	}

	render() {
		if (!this.#useDebugger) return
		const redGPUContext = this.redGPUContext
		if (this.#activeViewDebugger) {
			debuggerRenderViewList(redGPUContext.viewList)
		}
		if (this.#activeResourceDebugger) {
			debuggerRenderResourceManager(redGPUContext.resourceManager)
		}
	}

	#update() {
		this.redGPUContext.gpuAdapter.requestAdapterInfo().then(v => {
			console.log('requestAdapterInfo', v)
			this.#adapterInfo = v
		})
	}
}

export default RedGPUContextDebugger