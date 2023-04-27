import {CreateKey} from "./createElements.js";

const Q = new CreateKey();
const W = new CreateKey();
const E = new CreateKey();

//TITLE

document.body.insertAdjacentHTML('afterbegin', `<h1>Virtual keyboard</h1>`);
document.body.firstChild.className = 'title';

//TEXTAREA

document.body.insertAdjacentHTML('beforeend', `<textarea rows="5" cols="50"></textarea>`);
document.body.children[2].className = 'textarea';

//KEYBOARD


document.body.insertAdjacentHTML('beforeend', `<div class="main">${Q.getHtml('Q')}${W.getHtml('W')}${E.getHtml('E')}</div>`);




