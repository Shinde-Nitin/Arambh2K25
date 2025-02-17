// Countdown Timer
function updateCountdown() {
    const eventDate = new Date("February 25, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

    if (difference < 0) {
        document.getElementById("timer").innerHTML = "🎉 Event Started!";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Dark Mode Toggle
const darkModeButton = document.getElementById("dark-mode-toggle");

darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "☀️";
    } else {
        darkModeButton.textContent = "🌙";
    }
});

// Countdown Timer
function updateCountdown() {
    const eventDate = new Date("February 25, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

    if (difference < 0) {
        document.getElementById("timer").innerHTML = "🎉 Event Started!";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

function showMessage(event) {
    if (event === 'Traditional Day') {
        alert('No registration required for Traditional Day. Join us to celebrate our culture!');
    } else {
        // Handle other events where registration is needed
    }
}


