'use strict'
//sets up the variables for the app
var img;
var colors = [];
//sets the number of circle that there will be
var tileCountX = 30
var tileCountY = 30
//sets the inital size of circle that there will be drawn
var tileWidth = 0
var tileHeight = 0
//in order to use the img object  it has to be preload into the app
function preload() {
  img = loadImage('base_img.jpg')
}

function setup() {
  createCanvas(1240, 1748);
  noFill();
  noLoop();
  tileWidth = width / tileCountX
  tileHeight = height / tileCountY
}

function draw() {
  //loads the pixels of the image
  img.loadPixels();

  //loop that will capture the pixels of the image to create the colors for the swash
  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      //gets pixels X/Y of the image
      var px = int(gridX * tileWidth);
      var py = int(gridY * tileHeight);
      //formula that gets the size of the pixel
      var i = (py * img.width + px) * 4;
      //creates the color based on the pixels one after each other
      var c = color(
        img.pixels[i],
        img.pixels[i + 1],
        img.pixels[i + 2],
        img.pixels[i + 3]
      );
      //adds the color to the array that will be draw
      colors.push(c);
      // console.log(colors);
    }
  }
  //variable for chosing the random colors for the storke

  //draw the single circles
  for (var gridY = 0; gridY < tileCountX; gridY++) {
    // console.log(`gridY: ${gridY}`);
    for (var gridX = 0; gridX < tileCountY; gridX++) {
      stroke(0);
      //draws the location first tile based the sized of the tile
      ellipse(gridX * tileWidth, gridY * tileHeight, tileWidth, tileHeight);
    }

  }
}

//setsup the inputs for the application
function keyReleased() {
  //saves the canvas as a png
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
}