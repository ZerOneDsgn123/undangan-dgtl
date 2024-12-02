const weddingDate = new Date("Nov 30, 2024 00:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML = "Waktu Habis!";
    }
}, 1000);

document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('thank-you-message').style.display = 'block';

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('attendance').value = '';
    document.getElementById('message').value = '';
});


function copyNumber(number) {
    const tempInput = document.createElement("input");
    tempInput.value = number;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Nomor berhasil disalin: " + number);
}

let isPlaying = false;
const audioElement = document.getElementById('background-music');

window.onload = function() {
    audioElement.play();
    document.getElementById('music-icon').src = "play-button (2).png"; 
};

function toggleMusic() {
    const music = document.getElementById("background-music");
    const icon = document.getElementById("music-icon");

    if (music.paused) {
        music.play();
        icon.src = "play-button (2).png"; 
    } else {
        music.pause();
        icon.src = "play-button.png"; 
    }
}