function preload() {
}

function setup() {
    canvas = creatCanvas(640, 480);
    canvas.position(110, 250);
    video = creatCapture(VIDEO); 
    video.hide();

    tintColor = "";
}

function draw() {
    Image(video, 0, 0, 640, 480);
    tint(tintColor);
}

function takeSnapshot(){
    SVGAElement('studentName.png');
}

function filterTint()
{
    tintColor = document.getElementById("colorName").value;
}