let interval;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById("startStop").innerText = "Start";
    } else {
        interval = setInterval(updateStopwatches, 3000);  // Update both stopwatches every 3 seconds
        document.getElementById("startStop").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function updateStopwatches() {
    // Increment seconds by 3
    seconds += 3;

    // If the timer reaches 30 seconds, reset it back to 0
    if (seconds >= 30) {
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementById("timer").textContent = "00:00"; // Reset the digital timer display
        clearInterval(interval); // Stop the timer at 30 seconds
        document.getElementById("startStop").innerText = "Start"; // Change button to start
        isRunning = false; // Set running state to false
        resetAnalogClock(); // Reset analog clock to 0
        return; // Exit the function
    }

    // Update digital stopwatch (timer text)
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById("timer").textContent = `00:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    // Update analog stopwatch (rotation of hands)
    updateAnalogClock();
}

function updateAnalogClock() {
    const secondAngle = (seconds * 6) % 360;
    const minuteAngle = (minutes * 6 + seconds / 10) % 360;
    const hourAngle = (hours * 30 + minutes / 2) % 360;

    document.querySelector(".second-hand").style.transform = `rotate(${secondAngle}deg)`;
    document.querySelector(".minute-hand").style.transform = `rotate(${minuteAngle}deg)`;
    document.querySelector(".hour-hand").style.transform = `rotate(${hourAngle}deg)`;
}

function resetAnalogClock() {
    document.querySelector(".second-hand").style.transform = `rotate(0deg)`;
    document.querySelector(".minute-hand").style.transform = `rotate(0deg)`;
    document.querySelector(".hour-hand").style.transform = `rotate(90deg)`;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;

    // Reset both stopwatches
    document.getElementById("timer").textContent = "00:00";
    resetAnalogClock(); // Reset analog clock to 0

    document.getElementById("startStop").innerText = "Start";

    // Ensure the timer is fully reset to 0 seconds and ready to start
    seconds = 0;
    minutes = 0;
    hours = 0;
}
