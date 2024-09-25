const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const btnP = document.getElementById("pause");
const button = document.querySelectorAll("button");

let timesec = 0;
let timemin = 0;
let timehour = 0;
let timer = null; // Variable to store the interval ID
var click = new Audio("clicksound.mp3");
function start() {
  click.play();
  // Clear any existing interval before starting a new one
  if (timer !== null) {
    clearInterval(timer);
  }

  // Immediately update the display before starting the interval
  updateTimeDisplay();

  // Start a new interval
  timer = setInterval(function () {
    timesec++;

    // Update the minutes and seconds accordingly
    if (timesec === 60) {
      timesec = 0;
      timemin++;
    }

    if (timemin === 60) {
      timemin = 0;
      timehour++;
    }

    updateTimeDisplay();
  }, 1000); // Update every 1 second (1000 milliseconds)
}

function updateTimeDisplay() {
  // Add leading zeros if necessary
  sec.innerHTML = timesec < 10 ? "0" + timesec : timesec;
  min.innerHTML = (timemin < 10 ? "0" + timemin : timemin) + ":";
  hour.innerHTML = (timehour < 10 ? "0" + timehour : timehour) + ":";
}

btnP.onclick = function pause() {
  click.play();

  clearInterval(timer); // Use the timer variable to clear the interval
};

function reset() {
  click.play();

  clearInterval(timer); // Stop the interval
  timesec = 0;
  timemin = 0;
  timehour = 0;

  // Reset the displayed time
  updateTimeDisplay();
}
