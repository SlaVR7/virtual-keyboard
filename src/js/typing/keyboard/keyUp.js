import {
  row2, row2Rus, row2RusUpper, row2Upper,
} from '../../createElements';
import appendRows from '../../createElements/appendRows';
import keyboardData from '../../keyboardData';

function keyup(event) {
  if (!['ShiftLeft', 'ShiftRight'].includes(event.code)) {
    return;
  }
  let parameter;
  if (keyboardData.keyboard.contains(row2Upper)) {
    parameter = keyboardData.justRows;
  } else if (keyboardData.keyboard.contains(row2)) {
    parameter = keyboardData.rowsUpper;
  } else if (keyboardData.keyboard.contains(row2RusUpper)) {
    parameter = keyboardData.rowsRus;
  } else if (keyboardData.keyboard.contains(row2Rus)) {
    parameter = keyboardData.rowsRusUpper;
  }
  keyboardData.keyboard.innerHTML = '';
  appendRows(parameter);
  keyboardData.isShiftActive = false;
  const button = document.querySelector(`#${event.code}`);
  button.classList.remove('hovered');
}

export default keyup;
