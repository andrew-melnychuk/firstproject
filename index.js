'use strict';

// Wallpaper and title
const menu = document.querySelector('.hamb');

let currentMonth = new Date().getMonth() + 1;
let currentSeason;

currentMonth > 2 && currentMonth < 12
  ? (currentSeason = 'summer')
  : (currentSeason = 'winter');

const position = 'afterEnd';
let item;

currentSeason === 'winter'
  ? (item = `<div class="wallpaper wallpaper-${currentSeason}">
<h1 class="title ${currentSeason}">WINTER<br><span>has</span><span   id="hidden"></span><br>COME</h1>
</div>`)
  : (item = `<div class="wallpaper wallpaper-${currentSeason}">
  <h1 class="title ${currentSeason}">WINTER<br><span>is</span><span id="hidden">lii</span><br>COMING</h1>
</div>`);

menu.insertAdjacentHTML(position, item);
