import {row1, row2, row3, row4, row5, row1Upper, row2Upper, row3Upper, row4Upper, row5Upper, row1Rus, row2Rus, row3Rus, row4Rus, row5Rus, row1RusUpper, row2RusUpper, row3RusUpper, row4RusUpper, row5RusUpper} from "./createElements.js";

let isShiftActive = false;
let isCapsActive = false;
let helpfulKeysCodes = ['Backspace', 'Tab', 'CapsLock', 'Caps Lock', 'Enter', 'shift', 'ctrl', 'alt', 'win', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'AltLeft', 'MetaLeft', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
let str = '';


function typeTextByKeyboard(event) {
  let button = document.querySelector(`#${event.code}`);
  button.classList.add('hovered');

  if (!helpfulKeysCodes.includes(event.code)) {
    str += event.key;
    textarea.innerText = str;
  }

  if (event.code === 'ArrowLeft') {
    str += '◄';
    textarea.innerText = str;
  }
  if (event.code === 'ArrowUp') {
    str += '▲';
    textarea.innerText = str;
  }
  if (event.code === 'ArrowDown') {
    str += '▼';
    textarea.innerText = str;
  }
  if (event.code === 'ArrowRight') {
    str += '►';
    textarea.innerText = str;
  }

  if (event.code === 'Backspace') {
    str = str.slice(0, str.length - 1);
    textarea.innerText = str;
  }
}

function typeByMouse(event) {
  let lowerHelpfulKeyCodes = helpfulKeysCodes.map((item) => item.toLowerCase());
  let content = event.target.innerHTML;
  if (!event.target.getAttribute('id')) return;
  if (!lowerHelpfulKeyCodes.includes(content)) {
    str += content;
    textarea.innerText = str;
  }
  if (content === 'backspace') {
    str = str.slice(0, str.length - 1);
    textarea.innerText = str;
  }
}

function keydown(event) {
  if (event.altKey) event.preventDefault();

  // change language
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
    let caps = document.getElementById('CapsLock')
    caps.classList.remove('hovered');
    localStorage.setItem('lang', 'English');
  } else if (event.code === 'AltLeft' && event.ctrlKey && keyboard.contains(row2Upper)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1RusUpper);
    keyboard.appendChild(row2RusUpper);
    keyboard.appendChild(row3RusUpper);
    keyboard.appendChild(row4RusUpper);
    keyboard.appendChild(row5RusUpper);
    let caps = document.getElementById('CapsLock')
    caps.classList.add('hovered');
    localStorage.setItem('lang', 'Russian');
  } else if (event.code === 'AltLeft' && event.ctrlKey && keyboard.contains(row2RusUpper)) {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Upper);
    keyboard.appendChild(row2Upper);
    keyboard.appendChild(row3Upper);
    keyboard.appendChild(row4Upper);
    keyboard.appendChild(row5Upper);
    let caps = document.getElementById('CapsLock')
    caps.classList.add('hovered');
    localStorage.setItem('lang', 'English');
  }
  // change case by capslock
  else if (keyboard.contains(row2) && event.code === 'CapsLock') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Upper);
    keyboard.appendChild(row2Upper);
    keyboard.appendChild(row3Upper);
    keyboard.appendChild(row4Upper);
    keyboard.appendChild(row5Upper);
    let caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    isCapsActive = true;
  } else if (keyboard.contains(row2Rus) && event.code === 'CapsLock') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1RusUpper);
    keyboard.appendChild(row2RusUpper);
    keyboard.appendChild(row3RusUpper);
    keyboard.appendChild(row4RusUpper);
    keyboard.appendChild(row5RusUpper);
    let caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    isCapsActive = true;
  } else if (keyboard.contains(row2Upper) && event.code === 'CapsLock') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1);
    keyboard.appendChild(row2);
    keyboard.appendChild(row3);
    keyboard.appendChild(row4);
    keyboard.appendChild(row5);
    let caps = document.getElementById('CapsLock');
    caps.classList.remove('hovered');
    isCapsActive = false;
  } else if (keyboard.contains(row2RusUpper) && event.code === 'CapsLock') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Rus);
    keyboard.appendChild(row2Rus);
    keyboard.appendChild(row3Rus);
    keyboard.appendChild(row4Rus);
    keyboard.appendChild(row5Rus);
    let caps = document.getElementById('CapsLock');
    caps.classList.remove('hovered');
    isCapsActive = false;
  }
  // change case by shift
  else if (keyboard.contains(row2) && !isShiftActive && event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Upper);
    keyboard.appendChild(row2Upper);
    keyboard.appendChild(row3Upper);
    keyboard.appendChild(row4Upper);
    keyboard.appendChild(row5Upper);
    isShiftActive = true;
    let button = document.querySelector(`#${event.code}`);
    button.classList.add('hovered');
  } else if (keyboard.contains(row2Upper) && !isShiftActive && event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1);
    keyboard.appendChild(row2);
    keyboard.appendChild(row3);
    keyboard.appendChild(row4);
    keyboard.appendChild(row5);
    isShiftActive = true;
    let button = document.querySelector(`#${event.code}`);
    button.classList.add('hovered');
  } else if (keyboard.contains(row2Rus) && !isShiftActive && event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1RusUpper);
    keyboard.appendChild(row2RusUpper);
    keyboard.appendChild(row3RusUpper);
    keyboard.appendChild(row4RusUpper);
    keyboard.appendChild(row5RusUpper);
    isShiftActive = true;
    let button = document.querySelector(`#${event.code}`);
    button.classList.add('hovered');
  } else if (keyboard.contains(row2RusUpper) && !isShiftActive && event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Rus);
    keyboard.appendChild(row2Rus);
    keyboard.appendChild(row3Rus);
    keyboard.appendChild(row4Rus);
    keyboard.appendChild(row5Rus);
    isShiftActive = true;
    let button = document.querySelector(`#${event.code}`);
    button.classList.add('hovered');
  }

  if (event.shiftKey && document.getElementById('CapsLock').classList.contains('hovered') && !isCapsActive) {
    let caps = document.getElementById('CapsLock');
    caps.classList.remove('hovered');
  } else if (event.shiftKey && !document.getElementById('CapsLock').classList.contains('hovered') && isCapsActive) {
    let caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
  }
}

function keyup(event) {
  if (keyboard.contains(row2Upper) && event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1);
    keyboard.appendChild(row2);
    keyboard.appendChild(row3);
    keyboard.appendChild(row4);
    keyboard.appendChild(row5);
    isShiftActive = false;
    let button = document.querySelector(`#${event.code}`);
    button.classList.remove('hovered');
  } else if (keyboard.contains(row2) && event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Upper);
    keyboard.appendChild(row2Upper);
    keyboard.appendChild(row3Upper);
    keyboard.appendChild(row4Upper);
    keyboard.appendChild(row5Upper);
    isShiftActive = false;
    let button = document.querySelector(`#${event.code}`);
    button.classList.remove('hovered');
  } else if (keyboard.contains(row2RusUpper) && event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1Rus);
    keyboard.appendChild(row2Rus);
    keyboard.appendChild(row3Rus);
    keyboard.appendChild(row4Rus);
    keyboard.appendChild(row5Rus);
    isShiftActive = false;
    let button = document.querySelector(`#${event.code}`);
    button.classList.remove('hovered');
  } else if (keyboard.contains(row2Rus) && event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyboard.innerHTML = '';
    keyboard.appendChild(row1RusUpper);
    keyboard.appendChild(row2RusUpper);
    keyboard.appendChild(row3RusUpper);
    keyboard.appendChild(row4RusUpper);
    keyboard.appendChild(row5RusUpper);
    isShiftActive = false;
    let button = document.querySelector(`#${event.code}`);
    button.classList.remove('hovered');
  }
}

function removeHover(event) {
  let button = document.querySelector(`#${event.code}`);
  if (event.code !== 'CapsLock') button.classList.remove('hovered');
}

//TITLE

document.body.insertAdjacentHTML('afterbegin', `<h1>Virtual keyboard</h1>`);
document.body.firstChild.className = 'title';

//TEXTAREA

document.body.insertAdjacentHTML('beforeend', `<textarea rows="5" cols="50"></textarea>`);
document.body.children[2].setAttribute('id', 'textarea');
let textarea = document.getElementById('textarea');

//KEYBOARD

//create keyboard
document.body.insertAdjacentHTML('beforeend', `<div class="keyboard"></div>`);
let keyboard = document.querySelector('.keyboard');
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



//type text

document.addEventListener('keydown', typeTextByKeyboard);

//unhover button

document.addEventListener('keyup', removeHover);

// type by mouse

keyboard.addEventListener('click', typeByMouse);

// change language & case
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);


//DESCRIPTION

document.body.insertAdjacentHTML('beforeend', '<p class="description">The keyboard was created in the Windows operating system</p>');
document.body.insertAdjacentHTML('beforeend', '<p class="description">Combination for changing the language is: CtrlLeft + AltLeft</p>');