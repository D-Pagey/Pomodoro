/**
  * Selectors
 */
const modalBtn = document.getElementsByClassName('modal-btn');
const modal = document.getElementsByClassName('modal-about');
const cancel = document.getElementsByClassName('modal-cancel');

const breakMins = document.getElementById('break-mins');
const breakSecs = document.getElementById('break-secs');
const mainMins = document.getElementById('main-mins');
const mainSecs = document.getElementById('main-secs');

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

const amendBtns = document.querySelectorAll('.increment-btn');

/**
  * Variables
 */
let minutes = '';
let deadline = '';

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

function initClock() {
  const currentTime = new Date();
  minutes = mainMins.innerHTML;
  deadline = new Date(currentTime.getTime() + (minutes * 60 * 1000));
  let timeInterval = setInterval(function() {
    let x = timeRemaining(deadline);
    mainMins.innerHTML = ('0' + x.minutes).slice(-2);;
    mainSecs.innerHTML = ('0' + x.seconds).slice(-2);
    if (x.total <= 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

function increment(element) {
  element.innerHTML = parseInt(element.innerHTML) + 1;
}

function decrement(element) {
  element.innerHTML = parseInt(element.innerHTML) - 1;
}

/**
  * Events
 */
modalBtn[0].addEventListener('click', function() {
  modal[0].showModal();
});

cancel[0].addEventListener('click', function() {
  modal[0].close();
});

amendBtns[0].addEventListener('click', function() {
  increment(breakMins);
});

amendBtns[1].addEventListener('click', function() {
  decrement(breakMins);
});

amendBtns[2].addEventListener('click', function() {
  increment(mainMins);
});

amendBtns[3].addEventListener('click', function() {
  decrement(mainMins);
});

start.addEventListener('click', initClock);

/* COUNTDOWN PLAN
*) Basic modal says done
*) Launch break timer
*) Increment tally
*) Modal to say get back to work
*) If tally == 4, then breaktimer = 20 mins
*/
