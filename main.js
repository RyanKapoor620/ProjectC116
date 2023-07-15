function preload(){
    mustache=loadImage("https://i.postimg.cc/BvnWwrxX/mousetache-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}
function modelloaded(){
    console.log("PoseNet is Loaded");
}
nosex=0;
nosey=0;
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("Nose X = "+nosex+" Nose Y = "+nosey);
    }
}
function draw(){
    image(video,0,0,400,400);
    image(mustache,nosex-50,nosey-5,100,50);
}
function take_snapshot(){
    save("Filtered_image.png");
}
