/* Footer */
const year = new Date().getFullYear();

const copyright = document.querySelector('footer');

let position = 'beforeend';
let item = `<p>Made by Andrew Melnychuk</p>`;

copyright.insertAdjacentHTML(position, item);
