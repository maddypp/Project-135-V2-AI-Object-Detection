status = "";

function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    objectdetector = ml5.objectDetector('cocossd' , modelloaded )
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("input").value;
}

function modelloaded() {
    console.log("model loaded");
    status = true;
}

function draw() {
    image(video, 0, 0, 500, 500);
}