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
const tally = document.querySelector('.tally-count')

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

const amendBtns = document.querySelectorAll('.increment-btn');

/**
  * Variables
 */
let mainMinutes = '';
let mainDeadline = '';
let timeInterval = '';
let breakMinutes = '';
let breakDeadline = '';

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
  mainMinutes = mainMins.innerHTML;
  mainDeadline = new Date(currentTime.getTime() + (mainMinutes * 60 * 1000));
  timeInterval = setInterval(function() {
    let x = timeRemaining(mainDeadline);
    mainMins.innerHTML = ('0' + x.minutes).slice(-2);
    mainSecs.innerHTML = ('0' + x.seconds).slice(-2);
    if (x.total <= 0) {
      clearInterval(timeInterval);
      increment(tally);
      if (tally.innerHTML % 4 == 0) {
        breakMins.innerHTML = 20;
      }
      alert('Time for a break');
      initBreak();
    }
  }, 1000);
}

function initBreak() {
  const currentTime = new Date();
  breakMinutes = breakMins.innerHTML;
  breakDeadline = new Date(currentTime.getTime() + (breakMinutes * 60 * 1000));
  timeInterval = setInterval(function() {
    let y = timeRemaining(breakDeadline);
    breakMins.innerHTML = ('0' + y.minutes).slice(-2);
    breakSecs.innerHTML = ('0' + y.seconds).slice(-2);
    if (y.total <= 0) {
      clearInterval(timeInterval);
      reset();
      alert('Time for work');
      initClock();
      breakMins.innerHTML = 5;
    }
  }, 1000);
}

function reset() {
  clearInterval(timeInterval);
  mainMins.innerHTML = 25;
  mainSecs.innerHTML = ('0' + '0').slice(-2);
  breakMins.innerHTML = 5;
  breakSecs.innerHTML = ('0' + '0').slice(-2);
  console.log('Reset the clock');
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

resetBtn.addEventListener('click', reset);

startBtn.addEventListener('click', initClock);
