noseX = 0;
noseY = 0;
LeftWristx = 0;
RightWristx = 0;
differance = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(result) {
if(result.length > 0)
{
    console.log(result)
    noseX = result[0].pose.nose.x;
    noseY = result[0].pose.nose.y;
    console.log("noseX = " + noseX +"noseY = " + noseY);
LeftWristx = result[0].pose.leftWrist.x;
RightWristx = result[0].pose.rightWrist.x;
differance = LeftWristx - RightWristx;
console.log("LeftWristx = " + LeftWristx +"RightWristx" + RightWristx);
}

}

function draw() {
background('##FFA500');
fill('#FF0000');
stroke('#FFFF00');
square(noseX, noseY, differance);

}


