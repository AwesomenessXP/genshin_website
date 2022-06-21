// play audio when button is pressed
const btn = document.querySelector('#playButton');
let isMuted = false;

btn.addEventListener('click', () => {
    const audio = document.querySelector("#playAudio");

    // when button is clicked, will mute/unmute the audio
    if (!isMuted) {
        audio.volume = 1;
        isMuted = true;
    }
    else {
        audio.volume = 0;
        isMuted = false;
    }
    audio.play();
    console.log("pressed");
});