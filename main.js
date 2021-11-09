
noseX=0;
noseY=0;
function preload(){
lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}

function setup(){
   canvas=createCanvas(400,400);
canvas.position(600,240)
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y+15;
    }
}

function draw(){
image(video,0,0,400,400);
image(lipstick,noseX,noseY,40,40);
}

function take_snapshot(){
    save('lipstick_filter.png');
}