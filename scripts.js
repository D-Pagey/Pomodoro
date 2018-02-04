/**
  * Selectors
 */
const clocks = document.querySelectorAll(".clockface");
const btns = document.querySelectorAll(".btn");

/**
  * Variables
 */
let mainCount = clocks[0].innerHTML;
let breakCount = clocks[1].innerHTML;
let tallyCount = 0;
let intervalID;

 /**
   * Methods
  */
function mainCountdown() {
  if (mainCount > 0) {
    mainCount -= 1;
    clocks[0].innerHTML = mainCount;
  } else if (mainCount == 0) {
    clearInterval(intervalID);
    tally();
    console.log("Finished work, now for a break.");
    startBreak();
  }
}

function breakCountdown() {
  if (breakCount > 0) {
    breakCount -= 1;
    clocks[1].innerHTML = breakCount;
  } else if (breakCount == 0) {
    clearInterval(intervalID);
    console.log("Finished break, now for more work.");
    reset();
    start();
  }
}

function start() {
  intervalID = setInterval(function() {
    mainCountdown();
  }, 1000);
}

function startBreak() {
  intervalID = setInterval(function() {
    breakCountdown();
  }, 1000);
}

function reset() {
  clocks[0].innerHTML = 6;
  clocks[1].innerHTML = 5
  mainCount = clocks[0].innerHTML;
  breakCount = clocks[1].innerHTML;
}

function tally() {
  tallyCount++;
  clocks[2].innerHTML = tallyCount;
}

/**
  * Events
 */
btns[6].addEventListener("click", start);
btns[4].addEventListener("click", reset);

/**
  To Do:
  1) Build 2 minute clock
  2) Implement clock into timers
  3) Inc/Dec functionality
  4) Pause button
*/

/**
1) Store current Date + Time
2) add maintimer.innerHTMl to the Date + Time
3) Countdown to stored date + timer
4) Once hit, +1 to tally, start break counter
5) Once tally = 4 then break timer = 20 mins
* Break timer to start after main has Finished
*/

// Modal Functionality
const modalBtn = document.getElementsByClassName('modal-btn');
const modal = document.getElementsByClassName('modal-about');
const button = document.getElementsByClassName('modal-cancel');

modalBtn[0].addEventListener('click', function() {
  modal[0].showModal();
});

button[0].addEventListener('click', function() {
  modal[0].close();
})
