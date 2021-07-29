function setup(){
    video = createCapture(VIDEO);
    video.position(200, 200);

    canvas = createCanvas(650, 500);
    canvas.position(900, 200);

 getposes =   ml5.poseNet(video, initialised);
 

}
function initialised(){
    console.log("PoseNet loaded successfully");
}