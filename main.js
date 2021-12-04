tint_colour="";

function preload() {
   
}

function setup() {
   canvas=createCanvas(600,400);
   canvas.position(100,250);
   camera=createCapture(VIDEO);
   camera.hide();
}

function draw() {
   image(camera,0,0,600,400);
   tint(tint_colour);
}

function apply(){
   tint_colour=document.getElementById("color").value;

}

function take_snapshot() {
     save("Image.png");
}