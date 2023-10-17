import keyboardData from '../../keyboardData';
import {
  row2, row2Rus, row2RusUpper, row2Upper,
} from '../../createElements';
import appendRows from '../../createElements/appendRows';

function shiftDown(event) {
  let parameter;
  if (keyboardData.keyboard.contains(row2)) {
    parameter = keyboardData.rowsUpper;
  } else if (keyboardData.keyboard.contains(row2Upper)) {
    parameter = keyboardData.justRows;
  } else if (keyboardData.keyboard.contains(row2Rus)) {
    parameter = keyboardData.rowsRusUpper;
  } else if (keyboardData.keyboard.contains(row2RusUpper)) {
    parameter = keyboardData.rowsRus;
  }
  keyboardData.keyboard.innerHTML = '';
  appendRows(parameter);
  keyboardData.isShiftActive = true;
  const button = document.querySelector(`#${event.code}`);
  button.classList.add('hovered');
}

export default shiftDown;
