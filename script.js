butter = "";
dynamite = "";
function preload(){
    dynamite = loadSound("dynamite.mp3");
    butter = loadSound("butter.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}