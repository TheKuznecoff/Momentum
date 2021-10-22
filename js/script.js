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

   if (hours >= 0 || hours < 6) {
      greeting.textContent = 'Good night'
   } else if (hours >= 6 || hours < 12) {
      greeting.textContent = 'Good morning'
   } else if (hours >= 12 || hours < 18) {
      greeting.textContent = 'Good day'
   } else (hours >= 18 || hours < 0) 
      greeting.textContent = 'Good evening'
}
showGreeting();