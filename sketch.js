function preload() {}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  ellipse(200, 200, 400, 400);
  ellipse(100, 125, 10, 10);
  ellipse(300, 125, 10, 10);
  line(200, 150, 200, 200);
  arc(200, 200, 200, 200, 0, PI);
}
