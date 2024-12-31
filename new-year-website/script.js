// Number of snowflakes
const numSnowflakes = 100;

// Create and append snowflakes
for (let i = 0; i < numSnowflakes; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  
  // Randomize the starting position (left) and animation duration (speed)
  const randomX = Math.random(); // Randomize left position between 0 and 1
  const randomSpeed = Math.random() * 5 + 5; // Random speed for snowflakes
  
  snowflake.style.setProperty('--random-x', randomX); // Pass randomX to the CSS as a custom property
  snowflake.style.animationDuration = `${randomSpeed}s`; // Set animation speed
  
  // Randomize the size of the snowflakes
  const size = Math.random() * 10 + 5; // Snowflakes will be between 5px and 15px
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  
  document.body.appendChild(snowflake);
}

// Play/pause song when button is clicked
document.getElementById("playButton").addEventListener("click", function() {
  const song = document.getElementById('newYearSong');
  
  // Check if the song is currently playing
  if (song.paused) {
    song.play(); // Play the song if it's paused
    this.textContent = "Pause Song"; // Change button text to "Pause"
  } else {
    song.pause(); // Pause the song if it's playing
    this.textContent = "Play New Year Song"; // Reset button text to "Play"
  }
});

// Countdown Timer
const countdownDate = new Date("Jan 1, 2025 00:00:00").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Happy New Year!";
  }
}, 1000);

// Ask for user's name and show personalized message
function getUserName() {
  const userName = prompt("What is your name?");
  if (userName) {
    const personalizedMessage = `Happy New Year 2025, ${userName}!`;
    document.getElementById("personalizedMessage").textContent = personalizedMessage;
  } else {
    document.getElementById("personalizedMessage").textContent = "Happy New Year 2025!";
  }
}

// Call the function to ask for user's name when the page loads
window.onload = getUserName;
