import {
  row2, row2Rus, row2RusUpper, row2Upper,
} from '../../createElements';
import appendRows from '../../createElements/appendRows';
import keyboardData from '../../keyboardData';

function mouseShiftDown(event) {
  if ([1, 2].includes(event.button)) {
    return;
  }
  let caps = document.getElementById('CapsLock');
  const eventTarget = event.target.getAttribute('id');
  const isCapsActive = caps.classList.contains('hovered');
  let shiftLeft = document.getElementById('ShiftLeft');
  let shiftRight = document.getElementById('ShiftRight');
  const isShiftsActive = [shiftLeft, shiftRight].some((shift) => shift.classList.contains('hovered'));
  const isTargetShifts = ['ShiftLeft', 'ShiftRight'].includes(eventTarget);
  if (!isTargetShifts || isShiftsActive) {
    return;
  }
  let rowsParameter;
  if (isCapsActive) {
    if (keyboardData.keyboard.contains(row2Upper)) {
      rowsParameter = keyboardData.justRows;
    }
    if (keyboardData.keyboard.contains(row2RusUpper)) {
      rowsParameter = keyboardData.rowsRus;
    }
    keyboardData.keyboard.innerHTML = '';
    appendRows(rowsParameter);
    caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
  } else if (!isCapsActive) {
    if (keyboardData.keyboard.contains(row2)) {
      rowsParameter = keyboardData.rowsUpper;
    }
    if (keyboardData.keyboard.contains(row2Rus)) {
      rowsParameter = keyboardData.rowsRusUpper;
    }
    keyboardData.keyboard.innerHTML = '';
    appendRows(rowsParameter);
    document.getElementById('CapsLock').classList.remove('hovered');
  }

  shiftRight = document.getElementById('ShiftRight');
  shiftLeft = document.getElementById('ShiftLeft');
  if (eventTarget === 'ShiftLeft') {
    shiftLeft.classList.add('hovered');
    shiftLeft.classList.add('noHover');
    shiftRight.classList.remove('hovered');
  }
  if (eventTarget === 'ShiftRight') {
    shiftRight.classList.add('hovered');
    shiftRight.classList.add('noHover');
    shiftLeft.classList.remove('hovered');
  }
}

export default mouseShiftDown;
