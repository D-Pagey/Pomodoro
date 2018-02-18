/**
  * Selectors
 */
const modalBtn = document.getElementsByClassName('modal-btn');
const modal = document.getElementsByClassName('modal-about');
const cancel = document.getElementsByClassName('modal-cancel');

const breakMins = document.getElementById('break-mins');
const breakSecs = document.getElementById('break-secs');
const mainMins = document.getElementById('main-mins')
const mainSecs = document.getElementById('main-secs')

/**
  * Variables
 */
const currentTime = new Date();
const deadline = new Date(currentTime.getTime() + (20 * 60 * 1000));

// let defaultTime = 25;
// let tallyCount = 0;
// let intervalID;

/**
  * Methods
*/
function timeRemaining(deadline) {
  const t = Date.parse(deadline) - Date.parse(new Date());
  const seconds = Math.floor( (t/1000) % 60 );
  const minutes = Math.floor( (t/1000/60) % 60 );

  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initClock(deadline) {
  let timeInterval = setInterval(function() {
    let x = timeRemaining(deadline);
    mainMins.innerHTML = x.minutes;
    mainSecs.innerHTML = x.seconds;
    if (x.total <= 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

initClock(deadline);





// function mainCountdown() {
//   if (mainCount > 0) {
//     mainCount -= 1;
//     clocks[0].innerHTML = mainCount;
//   } else if (mainCount == 0) {
//     clearInterval(intervalID);
//     tally();
//     console.log('Finished work, now for a break.');
//     startBreak();
//   }
// }

// function breakCountdown() {
//   if (breakCount > 0) {
//     breakCount -= 1;
//     clocks[1].innerHTML = breakCount;
//   } else if (breakCount == 0) {
//     clearInterval(intervalID);
//     console.log('Finished break, now for more work.');
//     reset();
//     start();
//   }
// }

// function start() {
//   intervalID = setInterval(function() {
//     mainCountdown();
//   }, 1000);
// }
//
// function startBreak() {
//   intervalID = setInterval(function() {
//     breakCountdown();
//   }, 1000);
// }

// function reset() {
//   clocks[0].innerHTML = 6;
//   clocks[1].innerHTML = 5
//   mainCount = clocks[0].innerHTML;
//   breakCount = clocks[1].innerHTML;
// }
//
// function tally() {
//   tallyCount++;
//   clocks[2].innerHTML = tallyCount;
// }

/**
  * Events
 */
// btns[6].addEventListener("click", start);
// btns[4].addEventListener("click", reset);
//
modalBtn[0].addEventListener('click', function() {
  modal[0].showModal();
});

cancel[0].addEventListener('click', function() {
  modal[0].close();
})

/**
  * Countdown tutorial
 */




/* COUNTDOWN PLAN
3) Countdown until current time == targetTime
4) Basic modal says done
5) Launch break timer
6) Increment tally
7) Modal to say get back to work
8) If tally == 4, then breaktimer = 20 mins
*/
