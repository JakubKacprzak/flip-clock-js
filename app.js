function flipClock(){
  const currentHour = document.querySelector('.current-hour');
  const currentMinute = document.querySelector('.current-minute');
  const currentSecond = document.querySelector('.current-second');

  const flipDigitTop = document.querySelectorAll('.flip-digit');

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

    flipDigitTop.forEach(element => element.innerHTML = `<span>${currSec > 9 ? currSec : "0" + currSec}</span>`)

    flipDigitTop[0].animate(
      [
          {transform: "rotateX(0)"},
          {transform: "rotateX(90deg)"}
      ],
      {
        duration: 500,
        iterations: 1,
        delay: 500
      }
    )
    flipDigitTop[1].animate(
      [
          {transform: "rotateX(90deg)"},
          {transform: "rotateX(0)"}
      ],
      {
        duration: 500,
        iterations: 1,
        endDelay: 500
      }
    )


  }

  setInterval(displayTime, timeDelay);
}
flipClock();