// Get the video and control elements
let video = document.getElementById("myVideo");
let playPauseButton = document.getElementById("playPauseButton");
let stopButton = document.getElementById("stopButton");
let muteButton = document.getElementById("muteButton");
let volumeSlider = document.getElementById("volumeSlider");

// Play or pause the video
playPauseButton.onclick = function() {
    if (video.paused) {
        video.play(); // Start the video
        playPauseButton.innerText = "Pause"; // Change button text
    } else {
        video.pause(); // Pause the video
        playPauseButton.innerText = "Play"; // Change button text
    }
};

// Stop the video and reset to start
stopButton.onclick = function() {
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset to beginning
    playPauseButton.innerText = "Play"; // Reset button text
};

// Mute or unmute the video
muteButton.onclick = function() {
    if (video.muted) {
        video.muted = false; // Unmute
        muteButton.innerText = "Mute"; // Change button text
    } else {
        video.muted = true; // Mute
        muteButton.innerText = "Unmute"; // Change button text
    }
};

// Change volume with slider
volumeSlider.oninput = function() {
    video.volume = volumeSlider.value; // Set video volume (0 to 1)
};