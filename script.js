var video = document.getElementById('video');
var play = document.getElementById('play');
var progress = document.getElementById('progress');
var Stop = document.getElementById('stop');
var time = document.getElementById('timestamp');

//video play and pause 
function togglevideostatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
//update play/pause icon
function updateplayicon(){
 if(video.paused){
     play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
 }else{
     play.innerHTML = '<i fa class="fa fa-pause fa-2x"></i>';
 }
}

//update progress
function updateprogress(){
    progress.value = (video.currentTime / video.duration)*100;

    //get mins
    let mins= Math.floor(video.currentTime/ 60);
    if(mins<10){
        mins = '0'+ String(mins);
    }
    //get secs
    let secs = Math.floor(video.currentTime % 60);
        if(secs<10){
        secs = '0' +String(secs);
        }
        timestamp.innerHTML =`${mins}:${secs}`;
    

}
//stop video
function stopvideo(){
    video.currentTime = 0;
    video.pause();
}
//video progress
function setvideoprogress(){
    video.currentTime = (+progress.value * video.duration) /100;
}

//add Event listner
video.addEventListener('click',togglevideostatus);
video.addEventListener('play',updateplayicon);
video.addEventListener('pause',updateplayicon);
video.addEventListener('timeupdate',updateprogress);

play.addEventListener('click',togglevideostatus);
Stop.addEventListener('click',stopvideo);
progress.addEventListener('change',setvideoprogress);