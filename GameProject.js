var ghost = 50;
var variableStoresTheKey = '1';

function setup() {
  createCanvas(1000, 1000);

  describe(
    'A white circle on a gray background. The circle follows the mouse user clicks on the canvas.'
  );
}

function draw() {
  background(ghost);
  if (mouseIsPressed === true) {
    for (let d = 100; d > 0; d -= 20) {
    circle(445, 445, mouseX, mouseY);
    fill("red");
  }
}
}


for (let x = 10; x < 100; x += 20) {
    circle(x, 25, x, 75);
    fill("red")
  }
