window.onload = function() {
    var video = document.getElementById("videoPlayer");
    var playPauseBtn = document.getElementById("playPauseBtn");
    var stopBtn = document.getElementById("stopBtn");
    var seekBar = document.getElementById("seekBar");
    var openLetterBtn = document.getElementById("openLetterBtn");

    playPauseBtn.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = "Pause";
        } else {
            video.pause();
            playPauseBtn.textContent = "Play";
        }
    });

    stopBtn.addEventListener("click", function() {
        video.pause();
        video.currentTime = 0;
        playPauseBtn.textContent = "Play";
    });

    video.addEventListener("timeupdate", function() {
        var value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
    });

    seekBar.addEventListener("input", function() {
        var time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });

    openLetterBtn.addEventListener("click", function() {
        window.location.href = "letter.html";
    });
};
