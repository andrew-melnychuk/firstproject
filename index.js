'use strict'

// Wallpaper and title
const menu = document.querySelector(".hamb");

let currentMonth = new Date().getMonth() + 1;
let currentSeason;

if (12 <= currentMonth && 2 <= currentMonth) currentSeason = 'winter';
else if (3 <= currentMonth && currentMonth <= 5) currentSeason = 'spring';
else if (6 <= currentMonth && currentMonth <= 8) currentSeason = 'summer';
else if (9 <= currentMonth && currentMonth <= 11) currentSeason = 'autumn';
else currentSeason = 'autumn';

const position = 'afterEnd';
let item;

if (currentSeason == 'winter') {
  item = `<div class="wallpaper wallpaper-${currentSeason}">
            <h1 class="title ${currentSeason}">WINTER<br><span>has</span><span   id="hidden"></span><br>COME</h1>
          </div>`;
} else if (currentSeason == 'spring') {
  item = `<div class="wallpaper wallpaper-${currentSeason}">
            <h1 class="title ${currentSeason}">SUMMER<br><span>is</span><span   id="hidden">lii</span><br>COMING</h1>
          </div>`;
} else if (currentSeason == 'summer') {
  item = `<div class="wallpaper wallpaper-${currentSeason}">
            <h1 class="title ${currentSeason}">SUMMER<br><span>has</span><span   id="hidden"></span><br>COME</h1>
          </div>`;
} else if (currentSeason == 'autumn') {
  item = `<div class="wallpaper wallpaper-${currentSeason}">
            <h1 class="title ${currentSeason}">WINTER<br><span>is</span><span   id="hidden">lii</span><br>COMING</h1>
          </div>`;
} else {
  item = `<div class="wallpaper wallpaper-${currentSeason}">
            <h1 class="title ${currentSeason}">Where<br><span>do you</span><span   id="hidden">lii</span><br>Live?</h1>
          </div>`;
}

menu.insertAdjacentHTML(position, item);