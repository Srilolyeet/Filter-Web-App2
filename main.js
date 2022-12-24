function preload(){
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,receive);
    poseNet.on('pose',gotPoses)
}
function receive(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x ="+results[0].pose.nose);
        console.log("nose y ="+results[0].pose.nose);
    }
}

function draw(){
    image(video,0,0,300,300);
}

function receive(){
    save('myFilterImaage.png')
}