/* Footer */
const year = new Date().getFullYear();

const copyright = document.querySelector('footer');

let position = 'beforeend';
let item = `<p class="copyright">Copyright &copy; 2019-${year} Andrew Melnychuk. All rights reserved.</p>`;

copyright.insertAdjacentHTML(position, item);
