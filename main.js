img="";
status="";
function preload(){
img=loadImage('dog_cat.jpg');
}

function setup(){
canvas=createCanvas(640, 420);
canvas.position(900, 300);
objectDetector=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innerHTML="status: detecting objects";
}

function draw(){
image(img,0,0,640,420);
fill("#FF0000");
text("dog",45,75);
noFill();
stroke("#FF0000");
rect(30, 60, 450, 350);
fill("#FF0000");
text("cat",320,120);
noFill();
stroke("#FF0000");
rect(300,90,270,320);
}
function modelloaded(){
console.log("modelloaded")
status=true
objectDetector.detect(img,gotresult)

}
function gotresult(error,results){
if(error){
console.log(error)
}
console.log(results)
}
