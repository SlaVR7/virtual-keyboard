import {
  row2, row2Rus, row2RusUpper, row2Upper,
} from '../../createElements';
import appendRows from '../../createElements/appendRows';
import keyboardData from '../../keyboardData';

function mouseCaps(event) {
  let caps = document.getElementById('CapsLock');
  const eventTarget = event.target.getAttribute('id');
  if (eventTarget === 'CapsLock' && !caps.classList.contains('hovered') && keyboardData.keyboard.contains(row2)) {
    keyboardData.keyboard.innerHTML = '';
    appendRows(keyboardData.rowsUpper);
    caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    const shiftRight = document.getElementById('ShiftRight');
    const shiftLeft = document.getElementById('ShiftLeft');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
  } else if (eventTarget === 'CapsLock' && caps.classList.contains('hovered') && keyboardData.keyboard.contains(row2Upper)) {
    keyboardData.keyboard.innerHTML = '';
    appendRows(keyboardData.justRows);
    caps = document.getElementById('CapsLock');
    const shiftLeft = document.getElementById('ShiftLeft');
    const shiftRight = document.getElementById('ShiftRight');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
    caps.classList.remove('hovered');
  } else if (eventTarget === 'CapsLock' && !caps.classList.contains('hovered') && keyboardData.keyboard.contains(row2Rus)) {
    keyboardData.keyboard.innerHTML = '';
    appendRows(keyboardData.rowsRusUpper);
    caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    const shiftRight = document.getElementById('ShiftRight');
    const shiftLeft = document.getElementById('ShiftLeft');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
  } else if (eventTarget === 'CapsLock' && caps.classList.contains('hovered') && keyboardData.keyboard.contains(row2RusUpper)) {
    keyboardData.keyboard.innerHTML = '';
    appendRows(keyboardData.rowsRus);
    const shiftLeft = document.getElementById('ShiftLeft');
    const shiftRight = document.getElementById('ShiftRight');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
    caps = document.getElementById('CapsLock');
    caps.classList.remove('hovered');
  }
}

export default mouseCaps;
