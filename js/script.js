const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

//Время
function showTime() {
   const date = new Date();
   const currentTime = date.toLocaleTimeString();
   time.textContent = currentTime;
   setTimeout(showTime, showDate, getTimeOfDay, 1000);
}
showTime();

//Дата
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function  showDate() {
   const today = new Date(),
       dayOfWeek = days[today.getDay()],
       dayOfMonth = today.getDate(),
       month = months[today.getMonth()];

   date.textContent = `${dayOfWeek}, ${dayOfMonth}, ${month}`;
}
showDate();

/* Дата в цифрах
function showDate() {
   let d = new Date();
   const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC' };
   const currentDate = d.toLocaleDateString('ru-RU', 'en-US', 'en-Br', options);
   date.textContent = currentDate;
}
showDate();
*/

//Приветствие
function getTimeOfDay() {
   const date = new Date();
   const hours = date.getHours();

   if (hours <= 0 || hours <= 5) {
      return ('night');
   } else if (hours <= 6 || hours <= 11) {
      return ('morning');
   } else if (hours <= 12 || hours <= 17) {
      return ('afternoon');
   } else {
      return ('evening');
   }
}
getTimeOfDay();

function showGreeting() {
   const timeOfDay = getTimeOfDay();
   const greetingText = `Good ${timeOfDay}`;
   greeting.textContent = greetingText;
}
showGreeting();

//При перезагрузке страницы приложения имя пользователя сохраняется
const nameValue = document.querySelector('.name');

function setLocalStorage() {
   localStorage.setItem('name', nameValue.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
   if (localStorage.getItem('name')) {
      nameValue.value = localStorage.getItem('name');
   }
}
window.addEventListener('load', getLocalStorage)


//Смена фонового изображения
const body = document.querySelector('body');
body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";

function getRandomNum(min = 1, max = 21) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}
getRandomNum();

function setBg() {
   const bgNum = getRandomNum().toString().padStart(2, 0);
   const img = new Image();
   img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${bgNum}.jpg`;
   img.onload = () => {
      body.style.backgroundImage = `url(${img.src})`;
   };
}
setBg();


//Изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана
const next = document.querySelector('.slide-next');
const prev = document.querySelector('.slide-prev');
let imgSlide = getRandomNum();
next.addEventListener('click', getSliderNext);
prev.addEventListener('click', getSliderPrev);

function getSliderNext() {
   if (imgSlide === 20) {
      imgSlide = 0;
   } else {
      imgSlide += 1;
   }
   setBg();
}

function getSliderPrev() {
   if (imgSlide === 20) {
      imgSlide = 0;
   } else {
      imgSlide += 1;
   }
   setBg();
}