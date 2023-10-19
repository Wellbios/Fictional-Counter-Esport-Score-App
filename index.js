let pointupdate1 = document.getElementById("score1")
let pointupdate2 = document.getElementById("score2")

let points1 = 0
let points2 = 0


function ScoreUpdateone(){
    points1++
    pointupdate1.textContent = points1
    if (points1 > points2){
        pointupdate1.style.background = "#1241ce"
        pointupdate1.style.opacity = ".85" 
    }
    else{
        pointupdate1.style.background = "rgba(0, 0, 0, .85)"
    }
}

function ScoreUpdatetwo(){
    points1 += 2
    pointupdate1.textContent = points1
    if (points1 > points2){
        pointupdate1.style.background = "#1241ce"
        pointupdate1.style.opacity = ".85" 
    }
    else{
        pointupdate1.style.background = "rgba(0, 0, 0, .85)"
    }
}

function ScoreUpdatethree(){
    points1 += 3
    pointupdate1.textContent = points1
    if (points1 > points2){
        pointupdate1.style.background = "#1241ce"
        pointupdate1.style.opacity = ".85" 
    }
    else{
        pointupdate1.style.background = "rgba(0, 0, 0, .85)"
    }
}

function ScoreUpdateone2(){
   points2++
   pointupdate2.textContent = points2
   if (points2 > points1){
        pointupdate2.style.background = "#1241ce"
        pointupdate2.style.opacity = ".85" 
    }
    else{
        pointupdate2.style.background = "rgba(0, 0, 0, .85)"
    }
} 

function ScoreUpdatetwo2(){
   points2 += 2
   pointupdate2.textContent = points2
   if (points2 > points1){
        pointupdate2.style.background = "#1241ce"
        pointupdate2.style.opacity = ".85" 
    }
    else{
        pointupdate2.style.background = "rgba(0, 0, 0, .85)"
    }
} 
function ScoreUpdatethree3(){
   points2 += 3
   pointupdate2.textContent = points2
   if (points2 > points1){
        pointupdate2.style.background = "#1241ce"
        pointupdate2.style.opacity = ".85" 
    }
    else{
        pointupdate2.style.background = "rgba(0, 0, 0, .85)"
    }
} 

function reset2(){
    points2 = 0
    pointupdate2.textContent = points2 
}

function reset1(){
    points1 = 0
    pointupdate1.textContent = points1
}


// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function replay() {
    points1 = 0
    points2 = 0
    pointupdate1.textContent = points1
    pointupdate2.textContent = points2
    pointupdate2.style.background = "rgba(0, 0, 0, .85)"
    pointupdate1.style.background = "rgba(0, 0, 0, .85)"
}