
//section BMI calculator

let range_h = document.getElementById("range-inp-h");
let value_h = document.getElementById("value-rng-h")
let value1;
let value2;
range_h.oninput = function () {
    value_h.innerHTML = this.value;
    value1 = this.value
    BMI_calculator()
}
let range_w = document.getElementById("range-inp-w");
let value_w = document.getElementById("value-rng-w")

range_w.oninput = function () {
    value_w.innerHTML = this.value;
    value2 = this.value
    BMI_calculator()
}
function BMI_calculator() {
    let bmiNumber = range_w.value / ((range_h.value / 100) * (range_h.value / 100))
    document.getElementById("BMI").innerHTML = bmiNumber.toFixed(1)
    if (parseFloat(bmiNumber.toFixed(1)) >= 35) {
        document.getElementById("status").innerHTML = "Obesity Class II"
        document.getElementById("status").style.backgroundColor = "rgb(175, 3, 3)"
    } else {
        if (parseFloat(bmiNumber.toFixed(1)) >= 25) {
            document.getElementById("status").innerHTML = "Overweight"
            document.getElementById("status").style.backgroundColor = "rgb(255, 170, 0)"
        } else {
            if (parseFloat(bmiNumber.toFixed(1)) >= 18.5) {
                document.getElementById("status").innerHTML = "Normal weight"
                document.getElementById("status").style.backgroundColor = "rgb(2, 113, 2)"
            } else {
                if (parseFloat(bmiNumber.toFixed(1)) >= 16) {
                    document.getElementById("status").innerHTML = "Underweight"
                    document.getElementById("status").style.backgroundColor = "rgb(255, 170, 0)"
                } else {
                    if (parseFloat(bmiNumber.toFixed(1)) < 16) {
                        document.getElementById("status").innerHTML = "Severely underweight"
                        document.getElementById("status").style.backgroundColor = "rgb(175, 3, 3)"
                    }
                }
            }
        }
    }
}
//--------------------------------------------------------------------------------------------------------
//section music player

const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const repeatButton = document.getElementById('repeat');
const shuffleButton = document.getElementById('shuffle');

let tracks = [
    'track1.mp3',
    'track2.mp3',
    'track3.mp3',
    'track4.mp3',
];
let images = [
    'track1.png',
    'track2.png',
    'track3.png',
    'track4.png',
];

let audio_img = document.getElementById("audio-img");

let currentTrackIndex = 0;
let isRepeating = false;
let isShuffling = false;
function loadImage(index) {
    audio_img.src = images[index]
}
function loadTrack(index) {
    audio.src = tracks[index];
    audio.load();
}

function playTrack() {
    audio.play();
}

function pauseTrack() {
    audio.pause();
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        playTrack();
        playButton.textContent = 'متوقف کردن';
    } else {
        pauseTrack();
        playButton.textContent = 'پخش';
    }
});

nextButton.addEventListener('click', () => {
    currentTrackIndex++;
    if (currentTrackIndex >= tracks.length) {
        currentTrackIndex = 0;
    }
    loadImage(currentTrackIndex)
    loadTrack(currentTrackIndex);
    playTrack();
});

prevButton.addEventListener('click', () => {
    currentTrackIndex--;
    if (currentTrackIndex < 0) {
        currentTrackIndex = tracks.length - 1;
    }
    loadImage(currentTrackIndex)
    loadTrack(currentTrackIndex);
    playTrack();
});

repeatButton.addEventListener('click', () => {
    isRepeating = !isRepeating;
    repeatButton.textContent = isRepeating ? 'repetition' : 'disable';
});

shuffleButton.addEventListener('click', () => {
    let random_number = Math.floor(Math.random() * (4)) + 0
    console.log(random_number)
    loadTrack(random_number)
    loadImage(random_number)
    playTrack();
});

audio.addEventListener('ended', () => {
    if (isRepeating) {
        loadImage(currentTrackIndex)
        loadTrack(currentTrackIndex);
        playTrack();
    } else {
        currentTrackIndex++;
        if (currentTrackIndex >= tracks.length) {
            currentTrackIndex = 0;
        }
        loadImage(currentTrackIndex)
        loadTrack(currentTrackIndex);
        playTrack();
    }
});
loadImage(currentTrackIndex)
loadTrack(currentTrackIndex);

//-----------------------------------------------------------------------------------------

let countdownDate = localStorage.getItem('countdownDate');

if (!countdownDate) {
    countdownDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000);
    localStorage.setItem('countdownDate', countdownDate);
} else {
    countdownDate = parseInt(countdownDate);
}

const x = setInterval(function () {

    const now = new Date().getTime();

    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = seconds + " Second | " + minutes + " Minute | " + hours + " Hour | " + days + " Day";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "زمان به پایان رسید!";
        localStorage.removeItem('countdownDate'); 
    }
}, 1000);
//section form

(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

let pw_value = document.getElementById("password")
let rpw_value = document.getElementById("repassword")
rpw_value.oninput = function () {
    if (rpw_value.value != pw_value.value) {
        document.getElementById("repass-feedback").innerHTML = "Passwords do not match!"
    }
    if ((rpw_value.value == pw_value.value)) {
        document.getElementById("repass-feedback").innerHTML = ""
    }
}