/*
 *   RedGPU - MIT License
 *   Copyright (c) 2019 ~ By RedCamel( webseon@gmail.com )
 *   issue : https://github.com/redcamel/RedGPU/issues
 *   Last modification time of this file - 2019.12.16 20:34:19
 *
 */
import RedGPU from "../src/RedGPU.js";

const cvs = document.createElement('canvas');

let testMat_color, testMat_colorPhong, testMat_bitmap, testMat_standard_diffuse, testMat_standard_diffuse_normal,
	testMat_standard_diffuse_normal_displacement, testMat_colorPhongTexture_normal,
	testMat_colorPhongTexture_normal_displacement,
	testMat_environment;
new RedGPU.RedGPUContext(
	cvs,
	function () {
		document.body.appendChild(cvs);
		let textureLoader = new RedGPU.RedTextureLoader(
			this,
			[
				'../assets/UV_Grid_Sm.jpg',
				'../assets/Brick03_col.jpg',
				'../assets/Brick03_nrm.jpg',
				'../assets/crate.png',
				'../assets/Brick03_disp.jpg',
				'../assets/specular.png',
				'../assets/emissive.jpg',
				[
					'../assets/cubemap/SwedishRoyalCastle/px.jpg',
					'../assets/cubemap/SwedishRoyalCastle/nx.jpg',
					'../assets/cubemap/SwedishRoyalCastle/py.jpg',
					'../assets/cubemap/SwedishRoyalCastle/ny.jpg',
					'../assets/cubemap/SwedishRoyalCastle/pz.jpg',
					'../assets/cubemap/SwedishRoyalCastle/nz.jpg'
				],
				[
					'../assets/cubemap/SwedishRoyalCastle/px.jpg',
					'../assets/cubemap/SwedishRoyalCastle/nx.jpg',
					'../assets/cubemap/SwedishRoyalCastle/py.jpg',
					'../assets/cubemap/SwedishRoyalCastle/ny.jpg',
					'../assets/cubemap/SwedishRoyalCastle/pz.jpg',
					'../assets/cubemap/SwedishRoyalCastle/nz.jpg'
				]
			],
			_ => {

				let MAX = 5000;
				let i = MAX;
				let tView;
				let tScene = new RedGPU.RedScene();
				let tGrid = new RedGPU.RedGrid(this)
				let tAxis = new RedGPU.RedAxis(this)
				let tCamera = new RedGPU.RedObitController(this)
				tGrid.centerColor = '#ff0000'

				tView = new RedGPU.RedView(this, tScene, tCamera)


				tCamera.targetView = tView // optional
				tCamera.distance = 50
				tCamera.speedDistance = 10

				tScene.grid = tGrid;
				tScene.axis = tAxis;
				let tLight
				tLight = new RedGPU.RedDirectionalLight('#0000ff', 0.5)
				tLight.x = 10
				tLight.y = 10
				tLight.z = 10
				tScene.addLight(tLight)
				//
				tLight = new RedGPU.RedDirectionalLight('#ff0000', 0.5)
				tLight.x = -10
				tLight.y = -10
				tLight.z = -10
				tScene.addLight(tLight)

				tLight = new RedGPU.RedDirectionalLight('#00ff00', 0.5)
				tLight.x = -10
				tLight.y = 20
				tLight.z = 20
				tScene.addLight(tLight)


				this.addView(tView)


				// testMat_environment = new RedGPU.RedEnvironmentMaterial(this, textureLoader.getTextureByIndex(1), textureLoader.getTextureByIndex(7))
				testMat_color = new RedGPU.RedColorMaterial(this, '#ffff12');
				testMat_colorPhong = new RedGPU.RedColorPhongMaterial(this, '#ffffff');
				testMat_colorPhongTexture_normal = new RedGPU.RedColorPhongTextureMaterial(this, '#fff253', 1, textureLoader.getTextureByIndex(2))
				testMat_colorPhongTexture_normal_displacement = new RedGPU.RedColorPhongTextureMaterial(this, '#341fff', 1, textureLoader.getTextureByIndex(2), textureLoader.getTextureByIndex(5), textureLoader.getTextureByIndex(6), textureLoader.getTextureByIndex(4))
				console.log(testMat_colorPhong)
				testMat_bitmap = new RedGPU.RedBitmapMaterial(this, textureLoader.getTextureByIndex(0));
				testMat_standard_diffuse = new RedGPU.RedStandardMaterial(this, textureLoader.getTextureByIndex(1), null, textureLoader.getTextureByIndex(5), textureLoader.getTextureByIndex(6));
				testMat_standard_diffuse_normal = new RedGPU.RedStandardMaterial(this, textureLoader.getTextureByIndex(1), textureLoader.getTextureByIndex(2), textureLoader.getTextureByIndex(5), textureLoader.getTextureByIndex(6));
				testMat_standard_diffuse_normal_displacement = new RedGPU.RedStandardMaterial(this, textureLoader.getTextureByIndex(1), textureLoader.getTextureByIndex(2), textureLoader.getTextureByIndex(5), textureLoader.getTextureByIndex(6), textureLoader.getTextureByIndex(4));


				let randomGeometry = _ => {
					return new RedGPU.RedSphere(this, 0.5, 16, 16, 16)
					return Math.random() > 0.5
						? new RedGPU.RedSphere(this, 0.5, 16, 16, 16) :
						Math.random() > 0.5
							? new RedGPU.RedCylinder(this, 0, 1, 2, 16, 16) :
							Math.random() > 0.5 ? new RedGPU.RedBox(this) : new RedGPU.RedPlane(this)
				}


				let division = MAX / 9
				while (i--) {
					let testMesh = new RedGPU.RedMesh(
						this,
						randomGeometry(),
						// i > division * 8 ? testMat_environment
							i>division * 7 ? testMat_color
								: i > division * 6 ? testMat_colorPhong
									: i > division * 5 ? testMat_bitmap
										: i > division * 4 ? testMat_standard_diffuse
											: i > division * 3 ? testMat_standard_diffuse_normal
												: i > division * 2 ? testMat_standard_diffuse_normal_displacement
													: i > division * 1 ? testMat_colorPhongTexture_normal : testMat_colorPhongTexture_normal_displacement
					);
					testMesh.x = Math.random() * 3000 - 1500;
					testMesh.y = Math.random() * 3000 - 1500;
					testMesh.z = Math.random() * 3000 - 1500;
					testMesh.rotationX = testMesh.rotationY = testMesh.rotationZ = Math.random() * 360;
					testMesh.scaleX = testMesh.scaleY = testMesh.scaleZ = Math.random() * 25 + 35;
					// tScene.addChild(testMesh)
				}
				let renderer = new RedGPU.RedRender();
				let render = time => {

					renderer.render(time, this);

					requestAnimationFrame(render);
				};
				requestAnimationFrame(render);
			}
		)
	}
);
