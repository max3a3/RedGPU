/*
 *   RedGPU - MIT License
 *   Copyright (c) 2019 ~ By RedCamel( webseon@gmail.com )
 *   issue : https://github.com/redcamel/RedGPU/issues
 *   Last modification time of this file - 2020.1.20 18:6:15
 *
 */
import RedGPUContext from "../RedGPUContext.js";
import RedGPUWorker from "../base/RedGPUWorker.js";
//TODO 정리해야함
const rootOriginSourceMap = {vertex: {}, fragment: {}};
const shaderModuleMap = {vertex: {}, fragment: {}};
let ShaderModule_GLSL_searchShaderModule_callNum = 0;
const parseSource = function (tSource, replaceList) {
  tSource = JSON.parse(JSON.stringify(tSource));
  if (RedGPUContext.useDebugConsole) console.time('searchTime :' + replaceList);
  let i = replaceList.length;
  while (i--) tSource = tSource.replace(new RegExp(`\/\/\#RedGPU\#${replaceList[i]}\#`, 'gi'), '');
  if (RedGPUContext.useDebugConsole) console.timeEnd('searchTime :' + replaceList);
  return tSource;
};
export default class ShaderModule_GLSL {
  redGPUContext;
  type;
  originSource;
  shaderModuleMap;
  sourceMap;
  GPUShaderModule;
  currentKey;

  constructor(redGPUContext, type, materialClass, source,) {
    let className = materialClass.name;
    let checkMap = rootOriginSourceMap[type][className];
    if (!checkMap) {
      rootOriginSourceMap[type][className] = new Map();
      shaderModuleMap[type][className] = {};
    }
    this.redGPUContext = redGPUContext;
    this.type = type;
    this.originSource = source;
    this.sourceMap = rootOriginSourceMap[type][className];
    this.shaderModuleMap = shaderModuleMap[type][className];
    if (!checkMap) {
      let tOptionList = materialClass.PROGRAM_OPTION_LIST[type];
      // console.log('type', type);
      // console.log(`materialClass.PROGRAM_OPTION_LIST - ${className}`, tOptionList.length, tOptionList);
      if (tOptionList.length) {
        RedGPUWorker.glslParserWorker(this.redGPUContext, this, className, this.originSource, this.type, tOptionList).then(
          e => {
            console.log('모든경우의수 컴파일 완료', e.data.shaderName, e.data.shaderType, e.data.totalNum);
            // console.log(this.sourceMap)
          }
        );
      }
    }
    this.searchShaderModule([className]);
  }

  searchShaderModule(optionList) {
    optionList.sort();
    let searchKey = optionList.join('_');
    if (this.currentKey == searchKey) return;
    ShaderModule_GLSL_searchShaderModule_callNum++;
    if (RedGPUContext.useDebugConsole) console.log('ShaderModule_GLSL_searchShaderModule_callNum', ShaderModule_GLSL_searchShaderModule_callNum);
    this.currentKey = searchKey;
    if (this.shaderModuleMap[searchKey]) {
      console.log('use cached shaderModule', this.type, searchKey);
      return this.GPUShaderModule = this.shaderModuleMap[searchKey];
    } else {
      // console.log('searchKey', searchKey)
      let tCompileGLSL;
      // console.time('compileGLSL : ' + this.type + ' / ' + searchKey);
      tCompileGLSL = this.sourceMap.get(searchKey);
      // console.log('머가오는겨3',searchKey,parseSource(this.originSource, optionList),tCompileGLSL)
      if (tCompileGLSL instanceof Uint32Array) {
        console.log('compileGLSL - cached shader source.', this.type, searchKey);
      } else {
        // console.log(this.originSource)
        if (!tCompileGLSL) this.sourceMap.set(searchKey,  tCompileGLSL = (this.redGPUContext.twgsl.convertSpirV2WGSL(this.redGPUContext.glslang.compileGLSL(parseSource(this.originSource, optionList), this.type))).replace(/@stride\([0-9]*\)/g,''));
        // if (!tCompileGLSL) this.sourceMap.set(searchKey, tCompileGLSL = (this.redGPUContext.glslang.compileGLSL(parseSource(this.originSource, optionList), this.type)));
        // console.log('spirv',spirv)
        // console.log('tCompileGLSL',tCompileGLSL)
        console.log('compileGLSL - new shader source.', this.type, searchKey);
      }
      // console.timeEnd('compileGLSL : ' + this.type + ' / ' + searchKey);
      // console.log('머가오는겨2',searchKey,tCompileGLSL)
      this.shaderModuleDescriptor = {
        key: searchKey,
        code: tCompileGLSL,
        // source: this.sourceMap.get(searchKey)
      };
      this.GPUShaderModule = this.redGPUContext.device.createShaderModule(this.shaderModuleDescriptor);
      this.shaderModuleMap[searchKey] = this.GPUShaderModule;
    }

  }
}
