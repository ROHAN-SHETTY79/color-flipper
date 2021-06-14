function randomColor(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return "rgb(" + x + ", " + y + ", " + z + ")"
}
let generatedColor = randomColor();

// to change the Background color of the whole body
document.querySelector("*").style.background = generatedColor;
// to print the color on screen
document.querySelector("#Name") .innerHTML = generatedColor;
