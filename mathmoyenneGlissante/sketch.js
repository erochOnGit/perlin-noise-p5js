// Convert saved Bubble data into Bubble Objects
function loadData() {
  var bubbleData = data["bubbles"];
  for (var i = 0; i < bubbleData.length; i++) {
    // Get each object in the array
    var bubble = bubbleData[i];
    // Get a position object
    var position = bubble["position"];
    // Get x,y from position
    var x = position["x"];
    var y = position["y"];

    // Get diameter and label
    var diameter = bubble["diameter"];
    var label = bubble["label"];

    // Put object in array
    bubbles.push(new Bubble(x, y, diameter, label));
  }
}
let decalage = 1;
// let getAmplitude = (data, coord) => {
//   for (let i = 0; i < data.length; i++) {
//     if (coord == "x") {
//       for (let j = i+1; j < data.length; j++) {
//         data[i].x>data[j].x;

//       }
//     }
//     if (coord == "y") {
//       data.y;
//     }
//     if (coord == "z") {
//       data.z;
//     }
//   }
// };

let moyenneGlissante = (data, userId) => {
  let x = 0;
  let y = 0;
  let result = [];
  data = data.filter(obj => {
    return obj.userID === userId;
  });
  for (let i = 0; i < data.length - 9; i += decalage) {
    for (let j = 0; j < 9; j++) {
      let coord = data[i + j];
      x += coord.x;
      y += coord.y;
    }
    x = x / 10;
    y = y / 10;
    result.push({ x: x, y: y });
  }
  return result;
};
let tab;
let index = 0;
let previous;
function setup() {
  createCanvas(800, 800);
  data = loadJSON("./datatrack.json");
  background(250);
  setTimeout(() => {
    tab = moyenneGlissante(Object.values(data), 1);
  }, 250);
}

function draw() {
  stroke(0);
  line(0, 110, 0, 110);
  if (tab != undefined) {
    if (index > 0) {
      let arrX = tab.map(obj => {
        return obj.x;
      });
      let arrY = tab.map(obj => {
        return obj.y;
      });
      let valX = Math.max(...arrX) - Math.min(...arrX);
      let valY = Math.max(...arrY) - Math.min(...arrY);

      // let ratioX = 800 / valX;
      // let ratioY = 800 / valY;

      const drawX = ((tab[index].x - Math.min(...arrX)) / valX) * 800;
      const drawY = ((tab[index].y - Math.min(...arrY)) / valY) * 800;

      console.log(drawX, drawY);
      if (previous != undefined) {
        stroke(0);
        line(previous.x, previous.y, drawX, drawY);
      }

      previous = { x: drawX, y: drawY };
    }
    index++;
  } else {
    console.log("a  it plz");
  }
}
