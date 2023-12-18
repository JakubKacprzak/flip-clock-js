function flipClock(){
  const currentHour = document.querySelector('.current-hour');
  const currentMinute = document.querySelector('.current-minute');
  const currentSecond = document.querySelector('.current-second');

  const timeDelay = 1000;

  const displayTime = () => {
    const date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    currentHour.innerHTML = hrs > 9 ? hrs : "0" + hrs;
    currentMinute.innerHTML = min > 9 ? min : "0" + min;
    currentSecond.innerHTML = sec > 9 ? sec : "0" + sec;  
  }

  setInterval(displayTime, timeDelay);
}
flipClock();