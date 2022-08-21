song ="";
song2 ="";

function preload(){
    song =loadSound("BTS.mp3");
    song2 =loadSound("bTs(2)")
}
function setup(){
    canvas =createCanvas(600,500);
    canvas.center();

    video =createCapture(VIDEO);
    video.hide();

    poseNet =ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log("PoseNet Is Intialised");
}
function gotPoses(results){
    if(result.lenght > 0){

    }
}
function draw(){
    image(video,0,0,600,500);
}
