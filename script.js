butter = "";
dynamite = "";
leftWristX = 0;
leftWristY = 0; 
rightWristX = 0;
rightWristY = 0;
dynamite_isplaying = "";
butter_isplaying = "";
score_leftWrist = 0;
score_rightWrist = 0;
function preload(){
    dynamite = loadSound("dynamite.mp3");
    butter = loadSound("butter.mp3");
    butter_isplaying = butter.isPlaying();
    dynamite_isplaying = dynamite.isPlaying();
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

    fill("red");
    stroke("red");
    if(score_leftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        dynamite.stop();
        if(butter_isplaying == false){
            butter.play();
        }
        document.getElementById("song").innerHTML = "Song = BTS Butter";
        console.log("butter is playing")
    }

    if(score_rightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);
        butter.stop();
        if(dynamite_isplaying == false){
            dynamite.play();
        }
        document.getElementById("song").innerHTML = "Song = BTS Dynamite";
        console.log("dynamite is playing")
    }
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

        score_leftWrist = results[0].pose.keypoints[9].score;

        score_rightWrist = results[0].pose.keypoints[10].score;

        console.log("LeftWrist Score: "+score_leftWrist+"", "RightWrist Score: "+score_rightWrist+"", "LeftWristX: "+leftWristX+"" + "LeftWristY: "+leftWristY+"", "RightWristX: "+rightWristX+"", "RightWristY: "+rightWristY+"");
    }
}