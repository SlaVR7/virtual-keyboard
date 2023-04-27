import {row1, row2, row3, row4, row5} from "./createElements.js";

//TITLE

document.body.insertAdjacentHTML('afterbegin', `<h1>Virtual keyboard</h1>`);
document.body.firstChild.className = 'title';

//TEXTAREA

document.body.insertAdjacentHTML('beforeend', `<textarea rows="5" cols="50"></textarea>`);
document.body.children[2].className = 'textarea';

//KEYBOARD

document.body.insertAdjacentHTML('beforeend', `<div class="keyboard">${row1}${row2}${row3}${row4}${row5}</div>`);





