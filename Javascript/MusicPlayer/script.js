window.addEventListener("load", init);

var songsJson = [
    {
        "songname" : 'Faded',
        "songUrl" : 'songs/faded.mp3'
    },
    {
        "songname" : 'Fifa Worldcup',
        "songUrl" : 'songs/fifa world cup.mp3'
    },
    {
        "songname" : 'Galti se mistake',
        "songUrl" : 'songs/Galti.mp3'
    },
    {
        "songname" : 'Linkin Park - Faint',
        "songUrl" : 'songs/linkin_park-faint.mp3'
    },
    {
        "songname" : 'Vedalam',
        "songUrl" : 'songs/Vedalam.ogg'
    }
]

// console.log(songsJson);

var audio;
var song_tag;

function init(){
    audio = document.getElementById("audio");
    song_tag = document.getElementsByTagName("a");

    slider = document.getElementById("slider");

    slider.addEventListener("click", seekSong);

    document.getElementById("playSong").addEventListener("click",startSong);
    document.getElementById("pauseSong").addEventListener("click",pauseSong);

    for (var i=0; i<song_tag.length; i++){
        song_tag[i].addEventListener("click", playSong);
    }
}

function playSong(){
    var songName = event.srcElement.innerHTML;
    // console.log(songName);

    songsJson.forEach(function(obj){
        if(obj.songname == songName) {
            audio.src = obj.songUrl;
        }
    });
    // audio.src = 'songs/'+songName+'.mp3';
    audio.play();

    setInterval(function(){
        slider.value = audio.currentTime;
    },1000);
    setTimeout(function(){
        var audio_dur = audio.duration;
        slider.max = audio_dur;
    },1000);
}

function startSong(){
    audio.play();
}
function pauseSong(){
    audio.pause();
}

function seekSong(){
    audio.currentTime = slider.value;
}