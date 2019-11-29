/*
 *   RedGPU - MIT License
 *   Copyright (c) 2019 ~ By RedCamel( webseon@gmail.com )
 *   issue : https://github.com/redcamel/RedGPU/issues
 *   Last modification time of this file - 2019.11.29 12:46:41
 *
 */

"use strict";
import RedTypeSize from "../resources/RedTypeSize.js";
import RedBaseMaterial from "../base/RedBaseMaterial.js";
import RedShareGLSL from "../base/RedShareGLSL.js";
import RedMaterialPreset from "./RedMaterialPreset.js";

export default class RedStandardMaterial extends RedMaterialPreset.mix(
	RedBaseMaterial,
	RedMaterialPreset.diffuseTexture,
	RedMaterialPreset.normalTexture,
	RedMaterialPreset.basicLightPropertys
) {
	static vertexShaderGLSL = `
	#version 450
    ${RedShareGLSL.GLSL_SystemUniforms_vertex.systemUniforms}
    layout(set = 2,binding = 0) uniform MeshUniforms {
        mat4 modelMTX;
        mat4 normalMatrix;
    } meshUniforms;
         
	layout(location = 0) in vec3 position;
	layout(location = 1) in vec3 normal;
	layout(location = 2) in vec2 uv;
	layout(location = 0) out vec3 vNormal;
	layout(location = 1) out vec2 vUV;
	layout(location = 2) out vec4 vVertexPosition;	
	layout(set = 3,binding = 0) uniform VertexUniforms {
        float displacementFlowSpeedX;
        float displacementFlowSpeedY;
        float displacementPower;
    } vertexUniforms;
	
	layout(set = 3, binding = 2) uniform sampler uSampler;
	//#RedGPU#displacementTexture# layout(set = 3, binding = 6) uniform texture2D uDisplacementTexture;
	void main() {		
		vVertexPosition = meshUniforms.modelMTX * vec4(position, 1.0);
		vNormal = (meshUniforms.normalMatrix * vec4(normal,1.0)).xyz;
				
		//#RedGPU#displacementTexture# vVertexPosition.xyz += normalize(vNormal) * texture(sampler2D(uDisplacementTexture, uSampler), uv + vec2(
		//#RedGPU#displacementTexture#    vertexUniforms.displacementFlowSpeedX * (systemUniforms.time/1000.0),
		//#RedGPU#displacementTexture#    vertexUniforms.displacementFlowSpeedY * (systemUniforms.time/1000.0)
		//#RedGPU#displacementTexture# )).x * vertexUniforms.displacementPower ;
		
		gl_Position = systemUniforms.perspectiveMTX * systemUniforms.cameraMTX * vVertexPosition;
	
		vUV = uv;
	}
	`;
	static fragmentShaderGLSL = `
	#version 450
	${RedShareGLSL.GLSL_SystemUniforms_fragment.systemUniformsWithLight}
	layout(set = 3,binding = 1) uniform Uniforms {
        float normalPower;
        float shininess; 
        float specularPower;
	    vec4 specularColor;
    } uniforms;

	layout(location = 0) in vec3 vNormal;
	layout(location = 1) in vec2 vUV;
	layout(location = 2) in vec4 vVertexPosition;
	layout(set = 3, binding = 3) uniform sampler uSampler;
	//#RedGPU#diffuseTexture# layout(set = 3, binding = 4) uniform texture2D uDiffuseTexture;
	//#RedGPU#normalTexture# layout(set = 3, binding = 5) uniform texture2D uNormalTexture;
	layout(location = 0) out vec4 outColor;
		
	${RedShareGLSL.GLSL_SystemUniforms_fragment.cotangent_frame}
	${RedShareGLSL.GLSL_SystemUniforms_fragment.perturb_normal}
	
	void main() {
		vec4 diffuseColor = vec4(0.0);
		//#RedGPU#diffuseTexture# diffuseColor = texture(sampler2D(uDiffuseTexture, uSampler), vUV) ;
		
	    vec3 N = normalize(vNormal);
		vec4 normalColor = vec4(0.0);
		//#RedGPU#normalTexture# normalColor = texture(sampler2D(uNormalTexture, uSampler), vUV) ;
		//#RedGPU#normalTexture# N = perturb_normal(N, vVertexPosition.xyz, vUV, normalColor.rgb, uniforms.normalPower) ;

		
		calcDirectionalLight(
			diffuseColor,
			N,		
			systemUniforms.directionalLightCount,
			systemUniforms.directionalLightList,
			uniforms.shininess,
			uniforms.specularPower,
			uniforms.specularColor
		);
		
		calcPointLight(
			diffuseColor,
			N,		
			systemUniforms.pointLightCount,
			systemUniforms.pointLightList,
			uniforms.shininess,
			uniforms.specularPower,
			uniforms.specularColor,
			vVertexPosition.xyz
		);
		    
	
	    vec4 finalColor = LA + LD + LS;
		
		outColor = finalColor;
	}
`;
	static PROGRAM_OPTION_LIST = ['diffuseTexture', 'displacementTexture', 'normalTexture'];
	static uniformsBindGroupLayoutDescriptor = {
		bindings: [
			{
				binding: 0,
				visibility: GPUShaderStage.VERTEX,
				type: "uniform-buffer"
			},
			{
				binding: 1,
				visibility: GPUShaderStage.FRAGMENT,
				type: "uniform-buffer"
			},
			{
				binding: 2,
				visibility: GPUShaderStage.VERTEX,
				type: "sampler"
			},
			{
				binding: 3,
				visibility: GPUShaderStage.FRAGMENT,
				type: "sampler"
			},
			{
				binding: 4,
				visibility: GPUShaderStage.FRAGMENT,
				type: "sampled-texture"
			},
			{
				binding: 5,
				visibility: GPUShaderStage.FRAGMENT,
				type: "sampled-texture"
			},
			{
				binding: 6,
				visibility: GPUShaderStage.VERTEX,
				type: "sampled-texture"
			}
		]
	};
	static uniformBufferDescriptor_vertex = [
		{
			size: RedTypeSize.float,
			valueName: 'displacementFlowSpeedX',

		},
		{
			size: RedTypeSize.float,
			valueName: 'displacementFlowSpeedY',

		},
		{
			size: RedTypeSize.float,
			valueName: 'displacementPower',

		}
	]
	static uniformBufferDescriptor_fragment = [
		{size: RedTypeSize.float, valueName: 'normalPower', },
		{size: RedTypeSize.float, valueName: 'shininess', },
		{size: RedTypeSize.float, valueName: 'specularPower', },
		{
			size: RedTypeSize.float4,
			valueName: 'specularColorRGBA',

		}
	]

	_displacementTexture;
	#displacementFlowSpeedX = 0.0;
	#displacementFlowSpeedY = 0.0;
	#displacementPower = 0.1;

	constructor(redGPU, diffuseTexture, normalTexture, displacementTexture) {
		super(redGPU);
		console.log(diffuseTexture, normalTexture);
		this.diffuseTexture = diffuseTexture;
		this.normalTexture = normalTexture;
		this.displacementTexture = displacementTexture;
		this.resetBindingInfo()

	}

	checkTexture(texture, textureName) {
		if (texture) {
			if (texture.GPUTexture) {
				switch (textureName) {
					case 'diffuseTexture' :
						this._diffuseTexture = texture;
						break;
					case 'normalTexture' :
						this._normalTexture = texture;
						break;
					case 'displacementTexture' :
						this._displacementTexture = texture;
						break
				}
				console.log("로딩완료됨 textureName", textureName, texture.GPUTexture);
				this.resetBindingInfo()
			} else {
				texture.addUpdateTarget(this, textureName)
			}

		} else {
			this.resetBindingInfo()
		}
	}

	set displacementTexture(texture) {
		this._displacementTexture = null;
		this.checkTexture(texture, 'displacementTexture')
	}

	get displacementTexture() {
		return this._displacementTexture
	}


	get displacementFlowSpeedY() {
		return this.#displacementFlowSpeedY;
	}

	set displacementFlowSpeedY(value) {
		this.#displacementFlowSpeedY = value;
		 this.uniformBuffer_vertex.GPUBuffer.setSubData(this.uniformBufferDescriptor_vertex.redStructOffsetMap['displacementFlowSpeedY'].offset, new Float32Array([this.#displacementFlowSpeedY]))
	}

	get displacementFlowSpeedX() {
		return this.#displacementFlowSpeedX;
	}

	set displacementFlowSpeedX(value) {
		this.#displacementFlowSpeedX = value;
		 this.uniformBuffer_vertex.GPUBuffer.setSubData(this.uniformBufferDescriptor_vertex.redStructOffsetMap['displacementFlowSpeedX'].offset, new Float32Array([this.#displacementFlowSpeedX]))
	}

	get displacementPower() {
		return this.#displacementPower;
	}

	set displacementPower(value) {
		this.#displacementPower = value;
		 this.uniformBuffer_vertex.GPUBuffer.setSubData(this.uniformBufferDescriptor_vertex.redStructOffsetMap['displacementPower'].offset, new Float32Array([this.#displacementPower]))
	}

	resetBindingInfo() {
		this.bindings = [
			{
				binding: 0,
				resource: {
					buffer: this.uniformBuffer_vertex.GPUBuffer,
					offset: 0,
					size: this.uniformBufferDescriptor_vertex.size
				}
			},
			{
				binding: 1,
				resource: {
					buffer: this.uniformBuffer_fragment.GPUBuffer,
					offset: 0,
					size: this.uniformBufferDescriptor_fragment.size
				}
			},
			{
				binding: 2,
				resource: this.sampler.GPUSampler,
			},
			{
				binding: 3,
				resource: this.sampler.GPUSampler,
			},
			{
				binding: 4,
				resource: this._diffuseTexture ? this._diffuseTexture.GPUTextureView : this.redGPU.state.emptyTextureView,
			},
			{
				binding: 5,
				resource: this._normalTexture ? this._normalTexture.GPUTextureView : this.redGPU.state.emptyTextureView,
			},
			{
				binding: 6,
				resource: this._displacementTexture ? this._displacementTexture.GPUTextureView : this.redGPU.state.emptyTextureView,
			}
		];
		this.uniformBindGroupDescriptor = {
			layout: this.GPUBindGroupLayout,
			bindings: this.bindings
		};
		this.uniformBindGroup_material.setGPUBindGroup(this.uniformBindGroupDescriptor)
		this.searchModules();
		this.setUniformBindGroupDescriptor();
		this.updateUniformBuffer()
		this.updateUUID()
	}
}