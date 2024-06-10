"use strict";
import RedGPUContext from "../../../context/RedGPUContext";
import InterleaveInfo from "../../buffers/interleaveInfo/InterleaveInfo";
import InterleaveUnit from "../../buffers/interleaveInfo/InterleaveUnit";
import Geometry from "../Geometry";

export default class Box extends Geometry {
	constructor(
		redGPUContext: RedGPUContext,
		width: number = 1,
		height: number = 1,
		depth: number = 1,
		wSegments: number = 1,
		hSegments: number = 1,
		dSegments: number = 1,
		uvSize: number = 1
	) {
		const tData = makeData(redGPUContext, width, height, depth, wSegments, hSegments, dSegments, uvSize);
		// console.log('tData', tData)
		const data: Float32Array = tData['vertexData'];
		const interleaveInfo: InterleaveInfo = tData['interleaveInfo']
		const indexData: Uint32Array = tData['indexData']
		super(redGPUContext, data, interleaveInfo, indexData);
	}
}
const makeData = (function () {
	let numberOfVertices;
	let groupStart;
	let buildPlane;
	buildPlane = function (interleaveData, indexData, u, v, w, udir, vdir, width, height, depth, gridX, gridY, uvSize) {
		let segmentWidth = width / gridX;
		let segmentHeight = height / gridY;
		let widthHalf = width / 2, heightHalf = height / 2;
		let depthHalf = depth / 2;
		let gridX1 = gridX + 1, gridY1 = gridY + 1;
		let vertexCounter = 0;
		let groupCount = 0;
		let ix, iy;
		let vector = [];
		for (iy = 0; iy < gridY1; iy++) {
			let y = iy * segmentHeight - heightHalf;
			for (ix = 0; ix < gridX1; ix++) {
				let x = ix * segmentWidth - widthHalf;
				// set values to correct vector component
				vector[u] = x * udir, vector[v] = y * vdir, vector[w] = depthHalf,
					interleaveData.push(vector['x'], vector['y'], vector['z']), // position
					vector[u] = 0, vector[v] = 0, vector[w] = depth > 0 ? 1 : -1,
					interleaveData.push(vector['x'], vector['y'], vector['z']), // normal
					interleaveData.push(ix / gridX * uvSize, (iy / gridY * uvSize)), // texcoord
					vertexCounter += 1; // counters
			}
		}
		// indices
		for (iy = 0; iy < gridY; iy++) {
			for (ix = 0; ix < gridX; ix++) {
				let a = numberOfVertices + ix + gridX1 * iy;
				let b = numberOfVertices + ix + gridX1 * (iy + 1);
				let c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
				let d = numberOfVertices + (ix + 1) + gridX1 * iy;
				indexData.push(a, b, d, b, c, d);
				groupCount += 6;
			}
		}
		groupStart += groupCount;
		numberOfVertices += vertexCounter;
	};
	return function (redGPUContext, width, height, depth, wSegments, hSegments, dSegments, uvSize) {
		////////////////////////////////////////////////////////////////////////////
		// 데이터 생성!
		// buffers Data
		let interleaveData = [];
		let indexData = [];
		numberOfVertices = 0;
		groupStart = 0;
		buildPlane(interleaveData, indexData, 'z', 'y', 'x', -1, -1, depth, height, width, dSegments, hSegments, uvSize); // px
		buildPlane(interleaveData, indexData, 'z', 'y', 'x', 1, -1, depth, height, -width, dSegments, hSegments, uvSize); // nx
		buildPlane(interleaveData, indexData, 'x', 'z', 'y', 1, 1, width, depth, height, wSegments, dSegments, uvSize); // py
		buildPlane(interleaveData, indexData, 'x', 'z', 'y', 1, -1, width, depth, -height, wSegments, dSegments, uvSize); // ny
		buildPlane(interleaveData, indexData, 'x', 'y', 'z', 1, -1, width, height, depth, wSegments, hSegments, uvSize); // pz
		buildPlane(interleaveData, indexData, 'x', 'y', 'z', -1, -1, width, height, -depth, wSegments, hSegments, uvSize); // nz
		return {
			vertexData: new Float32Array(interleaveData),
			interleaveInfo: new InterleaveInfo(
				[
					new InterleaveUnit(InterleaveUnit.VERTEX_POSITION, "float32x3"),
					new InterleaveUnit(InterleaveUnit.VERTEX_NORMAL, "float32x3"),
					new InterleaveUnit(InterleaveUnit.TEXCOORD, 'float32x2')
				]
			),
			indexData: new Uint32Array(indexData)
		}
	};
})();
