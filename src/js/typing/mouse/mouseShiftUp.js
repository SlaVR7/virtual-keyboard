import {
  row2, row2Rus, row2RusUpper, row2Upper,
} from '../../createElements';
import appendRows from '../../createElements/appendRows';
import keyboardData from '../../keyboardData';

function mouseShiftUp(event) {
  if ([1, 2].includes(event.button)) {
    return;
  }
  const caps = document.getElementById('CapsLock');
  const eventTarget = event.target.getAttribute('id');
  const isTargetShifts = ['ShiftLeft', 'ShiftRight'].includes(eventTarget);
  const isCapsActive = caps.classList.contains('hovered');
  let keyboardParameters;
  if (isTargetShifts) {
    if (!isCapsActive) {
      if (keyboardData.keyboard.contains(row2Upper)) {
        keyboardParameters = keyboardData.justRows;
      } else if (keyboardData.keyboard.contains(row2RusUpper)) {
        keyboardParameters = keyboardData.rowsRus;
      }
    } else {
      if (keyboardData.keyboard.contains(row2)) {
        keyboardParameters = keyboardData.rowsUpper;
      }
      if (keyboardData.keyboard.contains(row2Rus)) {
        keyboardParameters = keyboardData.rowsRusUpper;
      }
    }
    keyboardData.keyboard.innerHTML = '';
    appendRows(keyboardParameters);
    const shiftLeft = document.getElementById('ShiftLeft');
    const shiftRight = document.getElementById('ShiftRight');
    shiftLeft.classList.remove('hovered');
    shiftRight.classList.remove('hovered');
  }
}

export default mouseShiftUp;
