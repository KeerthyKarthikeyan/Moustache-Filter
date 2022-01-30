function preload(){
    moustache=loadImage('moustache.png');
}

nosex=0;
nosey=0;

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotposes);
    
}

function modelLoaded(){
    console.log('posenet is initialized');
    
    }

function draw(){
    image(video,0,0,300,300);

}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-1;
    }
    
    }
    function draw() {
        image(video, 0, 0, 300, 300);
        
        image(moustache,nosex,nosey,30,30);
      }

function take_snapshot(){
save('MyFilterImage.png');
}