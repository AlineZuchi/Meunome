function setup() {
  createCanvas(900, 900);
  background("black");}

function draw(){
  stroke("black");
  fill("purple");
  
  if(mouseIsPressed) {
    rect(mouseX, mouseY, 20,35);
  }
}
