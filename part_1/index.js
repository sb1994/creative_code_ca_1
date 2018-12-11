'use strict'
//sets up the variables for the app
var img;

//in order to use the img object  it has to be preload into the app
function preload() {
  img = loadImage('base_img.jpg')
}

function setup() {
  createCanvas(800, 800);
  noStroke();
  console.log(img);
}

function draw() {
  // console.log(i);
}

//setsup the inputs for the application
function keyReleased() {
  //saves the canvas as a png
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
}