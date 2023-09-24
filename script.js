// Set the date for your event here (YYYY, MM (0-11), DD, HH, MM, SS)
const eventDate = new Date(2023, 8, 31, 18, 0, 0).getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        daysElement.innerText = "00";
        hoursElement.innerText = "00";
        minutesElement.innerText = "00";
        secondsElement.innerText = "00";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysElement.innerText = days.toString().padStart(2, "0");
    hoursElement.innerText = hours.toString().padStart(2, "0");
    minutesElement.innerText = minutes.toString().padStart(2, "0");
    secondsElement.innerText = seconds.toString().padStart(2, "0");
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
