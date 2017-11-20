
diam1 = 5;
function setup() 
{

 createCanvas(1600, 300); 
  background(0); 
  noStroke(); 

  var gridSize = 50;

  for (var x = gridSize; x <= width - gridSize; x += gridSize) {

    for (var y = gridSize; y <= height - gridSize; y += gridSize) {
      noStroke();
      fill(255);
      rect(x-1, y-1, 3, 3);
      stroke(255, 50);
      line(x, y, width/2, height/2);
    }
  }



}

function draw()
{
	//background ("#003366");
	//document.write('Serge Dontsa');
	fill("#ADD8E6");
	ellipse(800, 150, diam1, diam1);
	diam1 = diam1+5;

	rectMode(RADIUS);
	fill(255);
	rect(800, 150, 150, 30);

	fill('green');
	text("SERGE DONTSA", 800 ,150);



}

