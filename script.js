let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapTimes = [];
let lapNumber = 1;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const lapTimesDisplay = document.getElementById('lapTimes');

function updateDisplay() {
    hoursDisplay.textContent = formatTime(hours);
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);

    lapTimesDisplay.innerHTML = ''; // Clear lap times display
    lapTimes.forEach((lap, index) => {
        const lapElement = document.createElement('div');
        lapElement.textContent = `Lap ${index + 1}: ${lap}`;
        lapTimesDisplay.appendChild(lapElement);
    });
}

function formatTime(time) {
    return (time < 10 ? '0' : '') + time;
}

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapTimes = [];
    lapNumber = 1;
    updateDisplay();
}

function lapTimer() {
    if (timer) {
        const lapTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
        lapTimes.unshift(lapTime); 
        updateDisplay();
    }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', lapTimer);
