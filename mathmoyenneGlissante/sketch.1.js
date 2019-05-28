// // Convert saved Bubble data into Bubble Objects
// function loadData() {
//   var bubbleData = data["bubbles"];
//   for (var i = 0; i < bubbleData.length; i++) {
//     // Get each object in the array
//     var bubble = bubbleData[i];
//     // Get a position object
//     var position = bubble["position"];
//     // Get x,y from position
//     var x = position["x"];
//     var y = position["y"];

//     // Get diameter and label
//     var diameter = bubble["diameter"];
//     var label = bubble["label"];

//     // Put object in array
//     bubbles.push(new Bubble(x, y, diameter, label));
//   }
// }
// let decalage = 1;
// // let getAmplitude = (data, coord) => {
// //   for (let i = 0; i < data.length; i++) {
// //     if (coord == "x") {
// //       for (let j = i+1; j < data.length; j++) {
// //         data[i].x>data[j].x;

// //       }
// //     }
// //     if (coord == "y") {
// //       data.y;
// //     }
// //     if (coord == "z") {
// //       data.z;
// //     }
// //   }
// // };

// let moyenneGlissante = (data, userId) => {

//   data = data.filter(obj => {
//     return obj.userID === userId;
//   });
//   for (let i = 0; i < data.length - 9; i += decalage) {
//     for (let j = 0; j < 9; j++) {

//   }
//   return result;
// };
// let tab;
// let index = 0;
// let previous;
// function setup() {
//   createCanvas(800, 800);
//   data = loadJSON("./datatrack.json");
//   background(250);
//   setTimeout(() => {
//     tab = moyenneGlissante(Object.values(data), 1);
//   }, 250);
// }

// function draw() {
//   if (tab != undefined) {
//   } else {
//   }
// }
