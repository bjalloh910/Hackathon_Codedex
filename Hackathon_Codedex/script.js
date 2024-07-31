// COUNTDOWN JAVASCRIPT
const startTime = new Date("2024-07-11T22:33:00").getTime();
    
// Set the deadline time (in milliseconds)
const deadline = new Date("2024-08-14T15:00:00").getTime();
    
// Get the countdown element
const countdownElement = document.getElementById("countdown");
    
// Initialize the remaining time
let remainingTime = deadline - startTime;
    
// Update the countdown every second
setInterval(updateCountdown, 1000);
    
function updateCountdown() {
    const currentTime = new Date().getTime();
            
    remainingTime = deadline - currentTime;
            
    if (remainingTime <= 0) {
        clearInterval(this);
        countdownElement.innerHTML = "Countdown finished!";
        return;
    }
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = pad(days);
    document.getElementById("hours").innerHTML = pad(hours);
    document.getElementById("minutes").innerHTML = pad(minutes);
    document.getElementById("seconds").innerHTML = pad(seconds);
}
        
function pad(number) {
    return (number < 10 ? "0" : "") + number;
}

