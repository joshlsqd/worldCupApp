var teams = ["Argentina", "Australia", "Belgium", "Brazil","Colombia","Costa Rica","Croatia","Denmark","Egypt","England","France","Germany","Iceland","Iran","Japan","Mexico","Morocco","Nigeria","Panama","Peru","Poland","Portugal","Russia","Saudi Arabia","Serbia","Senegal","South Korea","Spain","Sweden","Switzerland","Tunisia","Uruguay"];

// newsapi.org Key = 7191270be1f245e497528ea460224750
function getVid(){
$("#vid-team").empty();
var team = $(this).attr("team-name");
console.log(team);
var queryURL = "http://www.youtube.com/watch?v=" + "+"+ team +",'World Cup'&sortBy=relevancy&language=en&apiKey=AIzaSyCTfaKhb6ju9hzFw1yweG-vmlud_jeHV_M"
}
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
height: '270',
width: '480',
events: {
'onReady': onPlayerReady,
'onStateChange': onPlayerStateChange
}
});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
// event.target.playVideo();
player.loadPlaylist({listType:'playlist',
list:'PLF5OMVTeNM5unHiZ5dQkAP5YOEtQ4yLlk',
index:0,
startSeconds:0,
suggestedQuality:'default'});
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {
setTimeout(stopVideo, 6000);
done = true;
}
}
function stopVideo() {
player.stopVideo();
}