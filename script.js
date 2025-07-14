const timeDisplay = document.querySelector('.time-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
    timeDisplay.textContent = formatTime(timeLeft);
}

function startTimer() {
    if (timerInterval) return; // Prevent multiple intervals
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert('時間です！');
            timeLeft = 25 * 60; // Reset for next session
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    timeLeft = 25 * 60;
    updateTimer();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateTimer(); // Initial display