const currentHour = document.querySelector('.current-hour');
const currentMinute = document.querySelector('.current-minute');
const currentSecond = document.querySelector('.current-second');

const displayTime = () => {
  const date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  currentHour.innerHTML = hrs;
  currentMinute.innerHTML = min;
  currentSecond.innerHTML = sec;  
}

setInterval(displayTime, 1000);

console.log(1)