/**
  * Selectors
 */
const clock = document.querySelectorAll(".clockface");
const btns = document.querySelectorAll(".btn");

/**
  * Variables
 */
let mainCount = clock[0].innerHTML;
let intervalID;

/**
  * Create 2 minute clock
*/
let mins;
let secs;



 /**
   * Methods
  */
function countdown() {
  if (mainCount > 0) {
    mainCount -= 1;
    clock[0].innerHTML = mainCount;
  } else if (mainCount == 0) {
    clearInterval(intervalID);
    console.log("Finished");
  }
}

function start(e) {
  intervalID = setInterval(countdown, 1000);
}

function reset(e) {
  clock[0].innerHTML = "25:00";
}

/**
  * Events
 */
btns[5].addEventListener("click", start);
btns[2].addEventListener("click", reset);

/**
  * To Do:
  * 1) Break timer to start after main has Finished
  * 2)
*/

/**
1) Store current Date + Time
2) add maintimer.innerHTMl to the Date + Time
3) Countdown to stored date + timer
4) Once hit, +1 to tally, start break counter
5) Once tally = 4 then break timer = 20 mins
*/
