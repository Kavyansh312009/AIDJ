song ="";
song2 ="";

scoreRightWrist=0;
scoreLeftWrist=0;

rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;

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

        scoreleftWristX= results[0].pose.keypoints[9].score;
        scoreRightWristY= results[0].pose.keypoints[10].score;

        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;

        leftWristX= results[0].pose.rightWrist.x;
        leftWristY= results[0].pose.rightWrist.y;
    }
}
function draw(){
    image(video,0,0,600,500);
    fill("deepskyblue");
    stroke("dodgerblue");
    circle(leftWristX+400,leftWristY,20);
    
    if(scoreRightWrist> 0.2){
        circle(rightWristX,rightWristY,20);
        InNumberrightWristY = Number(rightWristY);
        remove_decimal = floor(InNumberrightWristY);
        volume = remove_decimal/500;
        document.getElementById("Butter").innerHTML = "Butter is being played " + volume;
        song.setVolume(volume);
        console.log(volume); 
    }
}
