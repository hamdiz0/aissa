function playVideo(videoSource) {
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = videoSource;
    videoPlayer.load();
    videoPlayer.play();
}