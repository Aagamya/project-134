img="";
status="";
objects = [];
function preload(){
    img=loadImage("dog_cat.jpg")
}


function setup(){
 canvas=createCanvas(700,500)
 canvas.center()
 video=createCapture(VIDEO)
 video.size(700,500)
 video.hide()
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("Status").innerHTML= "Status: Detecting Objects"  
}




function modelLoaded(){
console.log(modelLoaded)
status=true
//objectDetector.detect(video,gotResults)
}

function gotResults(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results)
    objects=results;
}
}

function draw(){
    image(video,0,0,700,500)
    if( status!= ""){
        objectDetector.detect(video,gotResults)
    for (i=0; i < objects.length; i++){
    document.getElementById("Status").innerHTML = "Status : Object Detected";
    document.getElementById("number_of_objects").innerHTML= "number_of_objects :"+ objects.length
    fill("red")
    percent = floor(objects[i].confidence * 100);
    textSize(20)
    text(objects[i].label + " "+ percent+"%",objects[i].x, objects[i].y);
    noFill();
    stroke("red")
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

    }
    }
}






