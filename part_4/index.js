'use strict'
//sets up the variables for the app
var img;
var colors = [];
//sets the number of circle that there will be
var tileCount = 30
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
  tileWidth = width / tileCount
  tileHeight = height / tileCount
}

function draw() {
  //loads the pixels of the image
  img.loadPixels();

  //loop that will capture the pixels of the image to create the colors for the swash
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
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
      // console.log(c);

    }
  }
  //variable for index 
  var i;
  //draw the single circles
  for (var gridY = 0; gridY < tileCount; gridY++) {
    // console.log(`gridY: ${gridY}`);
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var colorIndex = int(random(0, colors.length))
      // console.log(colors[colorIndex + 1]);
      fill(colors[colorIndex + 1].levels);
      //draws the location first tile based the sized of the tile
      ellipse(gridX * tileWidth, gridY * tileHeight, tileWidth - PI, tileHeight - PI);

      // // var randomColor = colors[colorIndex]
      // fill(colors[colorIndex + 1].levels[0], colors[colorIndex].levels[1], colors[colorIndex].levels[2]);
      // //draws the location first tile based the sized of the tile
      // ellipse(gridX * tileWidth, gridY * tileHeight, tileWidth - PI, tileHeight - PI);
      // // var randomColor = colors[colorIndex]
      // fill(colors[colorIndex + 1].levels[0], colors[colorIndex].levels[1], colors[colorIndex].levels[2]);
      // //draws the location first tile based the sized of the tile
      // ellipse(gridX * tileWidth, gridY * tileHeight, tileWidth - PI, tileHeight - PI);
      // // var randomColor = colors[colorIndex]
      // fill(colors[colorIndex + 1].levels[0], colors[colorIndex].levels[1], colors[colorIndex].levels[2]);
      // //draws the location first tile based the sized of the tile
      // ellipse(gridX * tileWidth, gridY * tileHeight, tileWidth - PI, tileHeight - PI);
    }

  }
}


//setsup the inputs for the application
function keyReleased() {
  //saves the canvas as a png
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
}