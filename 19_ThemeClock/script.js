const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const ampm = hourEl >=12 ? 'PM' : 'AM';

const days = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
 const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  toggle.addEventListener('click', () => {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    html.classList.contains('dark') ? toggle.textContent = 'Light Mode' : 'Dark Mode';
  })


  function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    const scale = (num, in_min, in_max, out_min, out_max) => {
      return (num -in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hoursForClock}: ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]}<span class="circle">${date}</span>`
  }

setTime()
setInterval(setTime, 1000);