let year = new Date().getFullYear();

let elem = document.querySelector('footer');

let position = 'beforeend';
let item = `<p class="copyright">Copyright &copy; 2019-${year} Andrew Melnychuk. All rights reserved.</p>`;


elem.insertAdjacentHTML(position, item);