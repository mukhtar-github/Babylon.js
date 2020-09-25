// var myBox = BABYLON.MeshBuilder.CreateBox("myBox", {height: 5, width: 2, depth: 0.5}, scene);

// var myPoints = [
//     new BABYLON.Vector3(0, 0, 0),
//     new BABYLON.Vector3(0, 1, 1),
//     new BABYLON.Vector3(0, 1, 0)
// ];


scene.ambientColor = new BABYLON.Color3(1, 1, 1);

var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);

myMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
myMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
myMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
myMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

mesh.material = myMaterial;

