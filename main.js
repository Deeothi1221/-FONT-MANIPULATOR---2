function setup() {
    video = createCapture(VIDEO);
    video.size(400, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet is Initialized')
}

function draw() {
    background("#11ff00");
}