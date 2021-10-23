const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

//Время
function showTime() {
 const date = new Date();
 const currentTime = date.toLocaleTimeString();
 time.textContent = currentTime;
 setTimeout(showTime, showDate, showGreeting, 1000);
}
showTime();

//Дата
function showDate() {
 const d = new Date();
 const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC' };
 const currentDate = d.toLocaleDateString('ru-RU', 'en-US', 'en-Br', options);
 date.textContent = currentDate;
}
showDate();

//Приветствие
function showGreeting() {
 const date = new Date();
 const hours = date.getHours();

   if (hours <= 0 || hours <= 5) {
      greeting.textContent = 'Good night';
   } else if (hours <= 6 || hours <= 11) {
      greeting.textContent = 'Good morning';
   } else if (hours <= 12 || hours <= 17) {
      greeting.textContent = 'Good day';
   } else {
      greeting.textContent = 'Good evening';
   }
}
showGreeting();

//При перезагрузке страницы приложения имя пользователя сохраняется
const nameValue = document.querySelector('.name');

function setLocalStorage() {
   localStorage.setItem('name', nameValue.value);
 }
 window.addEventListener('beforeunload', setLocalStorage)

 function getLocalStorage() {
   if(localStorage.getItem('name')) {
      nameValue.value = localStorage.getItem('name');
   }
 }
 window.addEventListener('load', getLocalStorage)