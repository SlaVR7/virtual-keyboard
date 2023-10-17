import '../style.css';
import appendRows from './createElements/appendRows';
import mouseCaps from './typing/mouse/mouseCaps';
import typeTextByKeyboard from './typing/keyboard/typeTextByKeyboard';
import typeByMouse from './typing/mouse/typeByMouse';
import mouseShiftDown from './typing/mouse/mouseShiftDown';
import mouseShiftUp from './typing/mouse/mouseShiftUp';
import keyup from './typing/keyboard/keyUp';
import keyDown from './typing/keyboard/keyDown';
import keyboardData from './keyboardData';
import removeHover from './typing/keyboard/removeHover';

// TITLE
document.body.insertAdjacentHTML('afterbegin', '<h1>Virtual keyboard</h1>');
document.body.firstChild.className = 'title';

// TEXTAREA
document.body.insertAdjacentHTML('beforeend', '<textarea readonly rows="5" cols="50"></textarea>');
document.body.children[1].setAttribute('id', 'textarea');
keyboardData.textarea = document.querySelector('#textarea');

// create keyboard
document.body.insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');
keyboardData.keyboard = document.querySelector('.keyboard');
if (localStorage.getItem('lang') === 'English') {
  appendRows(keyboardData.justRows);
} else {
  appendRows(keyboardData.rowsRus);
}

// type text
document.addEventListener('keydown', typeTextByKeyboard);

// off hover to button
document.addEventListener('keyup', removeHover);

// type by mouse
document.addEventListener('click', mouseCaps);
document.addEventListener('mousedown', mouseShiftDown);
document.addEventListener('mouseup', mouseShiftUp);
keyboardData.keyboard.addEventListener('click', typeByMouse);
document.addEventListener('contextmenu', (e) => e.preventDefault());
// const shiftRight = document.getElementById('ShiftRight');
// const shiftLeft = document.getElementById('ShiftLeft');
// [shiftLeft, shiftRight].forEach((button) => button.addEventListener('mouseleave', (event) => {
//   mouseShiftUp(event);
// }));

// change language & case
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyup);

// DESCRIPTION

document.body.insertAdjacentHTML('beforeend', '<p class="description">The keyboard was created in the Windows operating system</p>');
document.body.insertAdjacentHTML('beforeend', '<p class="description">Combination for changing the language is: CtrlLeft + AltLeft</p>');
