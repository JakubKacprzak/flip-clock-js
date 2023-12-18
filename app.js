function flipClock(){
  const currentHour = document.querySelector('.current-hour');
  const currentMinute = document.querySelector('.current-minute');
  const currentSecond = document.querySelector('.current-second');

  const nextHour = document.querySelector('.next-hour');
  const nextMinute = document.querySelector('.next-minute');
  const nextSecond = document.querySelector('.next-second');

  const flipDigit = document.querySelectorAll('.flip-digit');

  const timeDelay = 1000;

  let currHrs;
  let currMin;
  let currSec;
  let nextHrs;
  let nextMin;
  let nextSec;
  let maxTime = 59;

  const displayTime = () => {
    const date = new Date();

    currHrs = date.getHours();
    currMin = date.getMinutes();
    currSec = date.getSeconds();

    nextHrs = currHrs < maxTime ? currHrs + 1: 0;
    nextMin = currMin < maxTime ? currMin + 1: 0;
    nextSec = currSec < maxTime ? currSec + 1: 0;



    currentHour.innerHTML = currHrs > 9 ? currHrs : "0" + currHrs;
    currentMinute.innerHTML = currMin > 9 ? currMin : "0" + currMin;
    currentSecond.innerHTML = nextSec > 9 ? nextSec : "0" + nextSec;
    
    // nextHour.innerHTML = nextHrs > 9 ? nextHrs : "0" + nextHrs;
    // nextMinute.innerHTML = nextMin > 9 ? nextMin : "0" + nextMin;
    // nextSecond.innerHTML = nextSec;

    flipDigit.forEach(element => element.innerHTML = currSec > 9 ? currSec : "0" + currSec);

  }

  setInterval(displayTime, timeDelay);
}
flipClock();