const countdownEl = document.getElementById('countdown');
const eventInput = document.getElementById('event');
const dateInput = document.getElementById('date');
const startButton = document.getElementById('start');

let countdownInterval;

function updateCountdown() {
    const targetDate = new Date(dateInput.value).getTime();
    const currentDate = new Date().getTime();
    const remaining = targetDate - currentDate;

    if (remaining <= 0) {
        clearInterval(countdownInterval);
        countdownEl.textContent = 'Time\'s up!';
        return;
    }

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

startButton.addEventListener('click', () => {
    const eventName = eventInput.value;
    const targetDate = dateInput.value;

    if (eventName && targetDate) {
        clearInterval(countdownInterval);
        countdownInterval = setInterval(updateCountdown, 1000);
    } else {
        alert('Please enter an event name and target date.');
    }
});