import {
  row1, row2, row3, row4, row5, row1Upper, row2Upper, row3Upper, row4Upper, row5Upper,
  row1Rus, row2Rus, row3Rus, row4Rus, row5Rus, row1RusUpper, row2RusUpper, row3RusUpper,
  row4RusUpper, row5RusUpper,
} from './createElements.js';

let isShiftActive = false;
let isCapsActive = false;
const helpfulKeysCodes = ['Backspace', 'Tab', 'CapsLock', 'Caps Lock', 'Enter', 'shift', 'ctrl', 'alt', 'win', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'AltLeft', 'MetaLeft', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
let str = '';
let textarea = document.getElementById('textarea');
let keyboard = document.querySelector('.keyboard');

function typeTextByKeyboard(event) {
  const button = document.querySelector(`#${event.code}`);
  if (event.code !== 'ShiftLeft' && event.code !== 'ShiftRight') button.classList.add('hovered');

  if (!helpfulKeysCodes.includes(event.code)) {
    str += event.key;
    textarea.value = str;
  }

  if (event.code === 'Enter') {
    str += '\n';
    textarea.value = str;
  }
  if (event.code === 'Tab') {
    str += '\t';
    textarea.value = str;
  }
  if (event.code === 'ArrowLeft') {
    str += '◄';
    textarea.value = str;
  }
  if (event.code === 'ArrowUp') {
    str += '▲';
    textarea.value = str;
  }
  if (event.code === 'ArrowDown') {
    str += '▼';
    textarea.value = str;
  }
  if (event.code === 'ArrowRight') {
    str += '►';
    textarea.value = str;
  }

  if (event.code === 'Backspace') {
    str = str.slice(0, str.length - 1);
    textarea.value = str;
  }
}

function typeByMouse(event) {
  const lowerHelpfulKeyCodes = helpfulKeysCodes.map((item) => item.toLowerCase());
  const content = event.target.innerHTML;
  if (!event.target.getAttribute('id')) return;
  if (!lowerHelpfulKeyCodes.includes(content) && !helpfulKeysCodes.includes(content)) {
    str += content;
    textarea.value = str;
  }
  if (event.target.getAttribute('id') === 'Enter') {
    str += '\n';
    textarea.value = str;
  }
  if (event.target.getAttribute('id') === 'Tab') {
    str += '\t';
    textarea.value = str;
  }
  if (content === 'backspace' || content === 'Backspace') {
    str = str.slice(0, str.length - 1);
    textarea.value = str;
  }
}

function mouseCaps(event) {
  let caps = document.getElementById('CapsLock');
  if (event.target.getAttribute('id') === 'CapsLock' && !caps.classList.contains('hovered') && keyboard.contains(row2)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Upper);
    keyboard.appendChild(row2Upper);
    keyboard.appendChild(row3Upper);
    keyboard.appendChild(row4Upper);
    keyboard.appendChild(row5Upper);
    caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    const shiftRight = document.getElementById('ShiftRight');
    const shiftLeft = document.getElementById('ShiftLeft');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
  } else if (event.target.getAttribute('id') === 'CapsLock' && caps.classList.contains('hovered') && keyboard.contains(row2Upper)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1);
    keyboard.appendChild(row2);
    keyboard.appendChild(row3);
    keyboard.appendChild(row4);
    keyboard.appendChild(row5);
    caps = document.getElementById('CapsLock');
    const shiftLeft = document.getElementById('ShiftLeft');
    const shiftRight = document.getElementById('ShiftRight');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
    caps.classList.remove('hovered');
  } else if (event.target.getAttribute('id') === 'CapsLock' && !caps.classList.contains('hovered') && keyboard.contains(row2Rus)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1RusUpper);
    keyboard.appendChild(row2RusUpper);
    keyboard.appendChild(row3RusUpper);
    keyboard.appendChild(row4RusUpper);
    keyboard.appendChild(row5RusUpper);
    caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    const shiftRight = document.getElementById('ShiftRight');
    const shiftLeft = document.getElementById('ShiftLeft');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
  } else if (event.target.getAttribute('id') === 'CapsLock' && caps.classList.contains('hovered') && keyboard.contains(row2RusUpper)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Rus);
    keyboard.appendChild(row2Rus);
    keyboard.appendChild(row3Rus);
    keyboard.appendChild(row4Rus);
    keyboard.appendChild(row5Rus);
    const shiftLeft = document.getElementById('ShiftLeft');
    const shiftRight = document.getElementById('ShiftRight');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
    caps = document.getElementById('CapsLock');
    caps.classList.remove('hovered');
  }
}

document.addEventListener('click', mouseCaps);

function mouseShiftDown(event) {
  let caps = document.getElementById('CapsLock');

  if ((event.target.getAttribute('id') === 'ShiftLeft' || event.target.getAttribute('id') === 'ShiftRight') && (!caps.classList.contains('hovered')) && keyboard.contains(row2)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Upper);
    keyboard.appendChild(row2Upper);
    keyboard.appendChild(row3Upper);
    keyboard.appendChild(row4Upper);
    keyboard.appendChild(row5Upper);
    const shiftRight = document.getElementById('ShiftRight');
    const shiftLeft = document.getElementById('ShiftLeft');
    document.getElementById('CapsLock').classList.remove('hovered');
    if (event.target.getAttribute('id') === 'ShiftLeft') {
      shiftLeft.classList.add('hovered');
      shiftRight.classList.remove('hovered');
    }
    if (event.target.getAttribute('id') === 'ShiftRight') {
      shiftRight.classList.add('hovered');
      shiftLeft.classList.remove('hovered');
    }
  }

  if ((event.target.getAttribute('id') === 'ShiftLeft' || event.target.getAttribute('id') === 'ShiftRight') && (!caps.classList.contains('hovered')) && keyboard.contains(row2Rus)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1RusUpper);
    keyboard.appendChild(row2RusUpper);
    keyboard.appendChild(row3RusUpper);
    keyboard.appendChild(row4RusUpper);
    keyboard.appendChild(row5RusUpper);
    const shiftRight = document.getElementById('ShiftRight');
    const shiftLeft = document.getElementById('ShiftLeft');
    document.getElementById('CapsLock').classList.remove('hovered');
    if (event.target.getAttribute('id') === 'ShiftLeft') {
      shiftLeft.classList.add('hovered');
      shiftRight.classList.remove('hovered');
    }
    if (event.target.getAttribute('id') === 'ShiftRight') {
      shiftRight.classList.add('hovered');
      shiftLeft.classList.remove('hovered');
    }
  }

  if ((event.target.getAttribute('id') === 'ShiftLeft' || event.target.getAttribute('id') === 'ShiftRight') && caps.classList.contains('hovered') && keyboard.contains(row2Upper)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1);
    keyboard.appendChild(row2);
    keyboard.appendChild(row3);
    keyboard.appendChild(row4);
    keyboard.appendChild(row5);
    caps = document.getElementById('CapsLock');
    const shiftRight = document.getElementById('ShiftRight');
    const shiftLeft = document.getElementById('ShiftLeft');
    if (event.target.getAttribute('id') === 'ShiftLeft') {
      shiftLeft.classList.add('hovered');
      shiftRight.classList.remove('hovered');
    }
    if (event.target.getAttribute('id') === 'ShiftRight') {
      shiftRight.classList.add('hovered');
      shiftLeft.classList.remove('hovered');
    }
    caps.classList.add('hovered');
  }
  if ((event.target.getAttribute('id') === 'ShiftLeft' || event.target.getAttribute('id') === 'ShiftRight') && caps.classList.contains('hovered') && keyboard.contains(row2RusUpper)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Rus);
    keyboard.appendChild(row2Rus);
    keyboard.appendChild(row3Rus);
    keyboard.appendChild(row4Rus);
    keyboard.appendChild(row5Rus);
    caps = document.getElementById('CapsLock');
    const shiftRight = document.getElementById('ShiftRight');
    const shiftLeft = document.getElementById('ShiftLeft');
    if (event.target.getAttribute('id') === 'ShiftLeft') {
      shiftLeft.classList.add('hovered');
      shiftRight.classList.remove('hovered');
    }
    if (event.target.getAttribute('id') === 'ShiftRight') {
      shiftRight.classList.add('hovered');
      shiftLeft.classList.remove('hovered');
    }
    caps.classList.add('hovered');
  }
}

function mouseShiftUp(event) {
  const caps = document.getElementById('CapsLock');
  if ((event.target.getAttribute('id') === 'ShiftLeft' || event.target.getAttribute('id') === 'ShiftRight') && !caps.classList.contains('hovered') && keyboard.contains(row2Upper)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1);
    keyboard.appendChild(row2);
    keyboard.appendChild(row3);
    keyboard.appendChild(row4);
    keyboard.appendChild(row5);
    const shiftLeft = document.getElementById('ShiftLeft');
    const shiftRight = document.getElementById('ShiftRight');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
  } else if ((event.target.getAttribute('id') === 'ShiftLeft' || event.target.getAttribute('id') === 'ShiftRight') && !caps.classList.contains('hovered') && keyboard.contains(row2RusUpper)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Rus);
    keyboard.appendChild(row2Rus);
    keyboard.appendChild(row3Rus);
    keyboard.appendChild(row4Rus);
    keyboard.appendChild(row5Rus);
    const shiftLeft = document.getElementById('ShiftLeft');
    const shiftRight = document.getElementById('ShiftRight');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
  }
  if ((event.target.getAttribute('id') === 'ShiftLeft' || event.target.getAttribute('id') === 'ShiftRight') && caps.classList.contains('hovered') && keyboard.contains(row2)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Upper);
    keyboard.appendChild(row2Upper);
    keyboard.appendChild(row3Upper);
    keyboard.appendChild(row4Upper);
    keyboard.appendChild(row5Upper);
    const shiftLeft = document.getElementById('ShiftLeft');
    const shiftRight = document.getElementById('ShiftRight');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
  }
  if ((event.target.getAttribute('id') === 'ShiftLeft' || event.target.getAttribute('id') === 'ShiftRight') && caps.classList.contains('hovered') && keyboard.contains(row2Rus)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1RusUpper);
    keyboard.appendChild(row2RusUpper);
    keyboard.appendChild(row3RusUpper);
    keyboard.appendChild(row4RusUpper);
    keyboard.appendChild(row5RusUpper);
    const shiftLeft = document.getElementById('ShiftLeft');
    const shiftRight = document.getElementById('ShiftRight');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
  }
}

document.addEventListener('mousedown', mouseShiftDown);
document.addEventListener('mouseup', mouseShiftUp);

function keydown(event) {
  if (event.altKey || event.keyCode === 9) event.preventDefault();
  // change language
  if (isShiftActive && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
    return;
  }
  if (event.code === 'AltLeft' && event.ctrlKey && keyboard.contains(row2)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Rus);
    keyboard.appendChild(row2Rus);
    keyboard.appendChild(row3Rus);
    keyboard.appendChild(row4Rus);
    keyboard.appendChild(row5Rus);
    localStorage.setItem('lang', 'Russian');
  } else if (event.code === 'AltLeft' && event.ctrlKey && keyboard.contains(row2Rus)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1);
    keyboard.appendChild(row2);
    keyboard.appendChild(row3);
    keyboard.appendChild(row4);
    keyboard.appendChild(row5);
    const caps = document.getElementById('CapsLock');
    caps.classList.remove('hovered');
    localStorage.setItem('lang', 'English');
  } else if (event.code === 'AltLeft' && event.ctrlKey && keyboard.contains(row2Upper)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1RusUpper);
    keyboard.appendChild(row2RusUpper);
    keyboard.appendChild(row3RusUpper);
    keyboard.appendChild(row4RusUpper);
    keyboard.appendChild(row5RusUpper);
    const caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    localStorage.setItem('lang', 'Russian');
  } else if (event.code === 'AltLeft' && event.ctrlKey && keyboard.contains(row2RusUpper)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Upper);
    keyboard.appendChild(row2Upper);
    keyboard.appendChild(row3Upper);
    keyboard.appendChild(row4Upper);
    keyboard.appendChild(row5Upper);
    const caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    localStorage.setItem('lang', 'English');
  } else if (keyboard.contains(row2) && event.code === 'CapsLock') { // change case by capslock
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Upper);
    keyboard.appendChild(row2Upper);
    keyboard.appendChild(row3Upper);
    keyboard.appendChild(row4Upper);
    keyboard.appendChild(row5Upper);
    const caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    isCapsActive = true;
  } else if (keyboard.contains(row2Rus) && event.code === 'CapsLock') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1RusUpper);
    keyboard.appendChild(row2RusUpper);
    keyboard.appendChild(row3RusUpper);
    keyboard.appendChild(row4RusUpper);
    keyboard.appendChild(row5RusUpper);
    const caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    isCapsActive = true;
  } else if (keyboard.contains(row2Upper) && event.code === 'CapsLock') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1);
    keyboard.appendChild(row2);
    keyboard.appendChild(row3);
    keyboard.appendChild(row4);
    keyboard.appendChild(row5);
    const caps = document.getElementById('CapsLock');
    caps.classList.remove('hovered');
    isCapsActive = false;
  } else if (keyboard.contains(row2RusUpper) && event.code === 'CapsLock') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Rus);
    keyboard.appendChild(row2Rus);
    keyboard.appendChild(row3Rus);
    keyboard.appendChild(row4Rus);
    keyboard.appendChild(row5Rus);
    const caps = document.getElementById('CapsLock');
    caps.classList.remove('hovered');
    isCapsActive = false;
  } else if (keyboard.contains(row2) && !isShiftActive && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) { // change case by shift
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Upper);
    keyboard.appendChild(row2Upper);
    keyboard.appendChild(row3Upper);
    keyboard.appendChild(row4Upper);
    keyboard.appendChild(row5Upper);
    isShiftActive = true;
    const button = document.querySelector(`#${event.code}`);
    button.classList.add('hovered');
  } else if (keyboard.contains(row2Upper) && !isShiftActive && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1);
    keyboard.appendChild(row2);
    keyboard.appendChild(row3);
    keyboard.appendChild(row4);
    keyboard.appendChild(row5);
    isShiftActive = true;
    const button = document.querySelector(`#${event.code}`);
    button.classList.add('hovered');
  } else if (keyboard.contains(row2Rus) && !isShiftActive && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1RusUpper);
    keyboard.appendChild(row2RusUpper);
    keyboard.appendChild(row3RusUpper);
    keyboard.appendChild(row4RusUpper);
    keyboard.appendChild(row5RusUpper);
    isShiftActive = true;
    const button = document.querySelector(`#${event.code}`);
    button.classList.add('hovered');
  } else if (keyboard.contains(row2RusUpper) && !isShiftActive && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Rus);
    keyboard.appendChild(row2Rus);
    keyboard.appendChild(row3Rus);
    keyboard.appendChild(row4Rus);
    keyboard.appendChild(row5Rus);
    isShiftActive = true;
    const button = document.querySelector(`#${event.code}`);
    button.classList.add('hovered');
  }
  if (event.shiftKey && document.getElementById('CapsLock').classList.contains('hovered') && !isCapsActive) {
    const caps = document.getElementById('CapsLock');
    caps.classList.remove('hovered');
    isShiftActive = true;
  } else if (event.shiftKey && !document.getElementById('CapsLock').classList.contains('hovered') && isCapsActive) {
    const caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    isShiftActive = true;
  }
}

function keyup(event) {
  if (keyboard.contains(row2Upper) && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1);
    keyboard.appendChild(row2);
    keyboard.appendChild(row3);
    keyboard.appendChild(row4);
    keyboard.appendChild(row5);
    isShiftActive = false;
    const button = document.querySelector(`#${event.code}`);
    button.classList.remove('hovered');
  } else if (keyboard.contains(row2) && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Upper);
    keyboard.appendChild(row2Upper);
    keyboard.appendChild(row3Upper);
    keyboard.appendChild(row4Upper);
    keyboard.appendChild(row5Upper);
    isShiftActive = false;
    const button = document.querySelector(`#${event.code}`);
    button.classList.remove('hovered');
  } else if (keyboard.contains(row2RusUpper) && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Rus);
    keyboard.appendChild(row2Rus);
    keyboard.appendChild(row3Rus);
    keyboard.appendChild(row4Rus);
    keyboard.appendChild(row5Rus);
    isShiftActive = false;
    const button = document.querySelector(`#${event.code}`);
    button.classList.remove('hovered');
  } else if (keyboard.contains(row2Rus) && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1RusUpper);
    keyboard.appendChild(row2RusUpper);
    keyboard.appendChild(row3RusUpper);
    keyboard.appendChild(row4RusUpper);
    keyboard.appendChild(row5RusUpper);
    isShiftActive = false;
    const button = document.querySelector(`#${event.code}`);
    button.classList.remove('hovered');
  }
}

function removeHover(event) {
  const button = document.querySelector(`#${event.code}`);
  if (event.code !== 'CapsLock') button.classList.remove('hovered');
}

// TITLE

document.body.insertAdjacentHTML('afterbegin', '<h1>Virtual keyboard</h1>');
document.body.firstChild.className = 'title';

// TEXTAREA

document.body.insertAdjacentHTML('beforeend', '<textarea rows="5" cols="50"></textarea>');
document.body.children[1].setAttribute('id', 'textarea');
textarea = document.getElementById('textarea');

// KEYBOARD

// create keyboard
document.body.insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');
keyboard = document.querySelector('.keyboard');
if (localStorage.getItem('lang') === 'English') {
  keyboard.appendChild(row1);
  keyboard.appendChild(row2);
  keyboard.appendChild(row3);
  keyboard.appendChild(row4);
  keyboard.appendChild(row5);
} else {
  keyboard.appendChild(row1Rus);
  keyboard.appendChild(row2Rus);
  keyboard.appendChild(row3Rus);
  keyboard.appendChild(row4Rus);
  keyboard.appendChild(row5Rus);
}

// type text

document.addEventListener('keydown', typeTextByKeyboard);

// off hover to button

document.addEventListener('keyup', removeHover);

// type by mouse

keyboard.addEventListener('click', typeByMouse);

// change language & case
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);

// DESCRIPTION

document.body.insertAdjacentHTML('beforeend', '<p class="description">The keyboard was created in the Windows operating system</p>');
document.body.insertAdjacentHTML('beforeend', '<p class="description">Combination for changing the language is: CtrlLeft + AltLeft</p>');
