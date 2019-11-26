/*
 *   RedGPU - MIT License
 *   Copyright (c) 2019 ~ By RedCamel( webseon@gmail.com )
 *   issue : https://github.com/redcamel/RedGPU/issues
 *   Last modification time of this file - 2019.11.26 19:46:12
 *
 */

"use strict";
import RedDisplayContainer from "./base/RedDisplayContainer.js";
import RedUtil from "./util/RedUtil.js"
import RedDirectionalLight from "./light/RedDirectionalLight.js";

export default class RedScene extends RedDisplayContainer {

	#backgroundColor = '#000';
	#backgroundColorAlpha = 1;
	#backgroundColorRGBA = [0, 0, 0, this.#backgroundColorAlpha];
	#directionalLightList = [];
	#grid;
	constructor() {
		super()
	}
	get grid() {
		return this.#grid;
	}

	set grid(value) {
		this.#grid = value;
	}
	get backgroundColor() {
		return this.#backgroundColor;
	}

	set backgroundColor(value) {
		this.#backgroundColor = value;
		let rgb = RedUtil.hexToRGB_ZeroToOne(value);
		this.#backgroundColorRGBA = [...rgb, this.#backgroundColorAlpha]
	}

	get backgroundColorAlpha() {
		return this.#backgroundColorAlpha;
	}

	set backgroundColorAlpha(value) {
		this.#backgroundColorAlpha = this.#backgroundColorRGBA[3] = value;
	}

	get backgroundColorRGBA() {
		return this.#backgroundColorRGBA;
	}

	get directionalLightList() {
		return this.#directionalLightList
	}

	addLight(light) {
		switch (light.constructor) {
			case RedDirectionalLight:
				this.#directionalLightList.push(light);
				break;
			default:
				RedUtil.throwFunc('addLight : RedBaseLight 인스턴스만 가능');
		}
	}

	removeLight(light) {
		// TODO
	}

}