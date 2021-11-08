butter = "";
dynamite = "";
leftWristX = 0;
leftWristY = 0; 
rightWristX = 0;
rightWristY = 0;
function preload(){
    dynamite = loadSound("dynamite.mp3");
    butter = loadSound("butter.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("pose net model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("LeftWristX: "+leftWristX+"" + "LeftWristY: "+leftWristY+"", "RightWristX: "+rightWristX+"", "RightWristY: "+rightWristY+"");
    }
}