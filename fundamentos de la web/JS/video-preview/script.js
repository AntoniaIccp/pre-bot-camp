console.log("page loaded...");

function playVideo(vid) {
    vid.play();

}

function pauseVideo(vid) {
    vid.pause();
    vid.currentime = 0;
    
}