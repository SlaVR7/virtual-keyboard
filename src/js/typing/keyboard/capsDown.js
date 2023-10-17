import keyboardData from '../../keyboardData';
import {
  row2, row2Rus, row2RusUpper, row2Upper,
} from '../../createElements';
import appendRows from '../../createElements/appendRows';

function capsDown() {
  if (keyboardData.keyboard.contains(row2)) {
    keyboardData.keyboard.innerHTML = '';
    appendRows(keyboardData.rowsUpper);
    const caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    keyboardData.isCapsActive = true;
  } else if (keyboardData.keyboard.contains(row2Rus)) {
    keyboardData.keyboard.innerHTML = '';
    appendRows(keyboardData.rowsRusUpper);
    const caps = document.getElementById('CapsLock');
    caps.classList.add('hovered');
    keyboardData.isCapsActive = true;
  } else if (keyboardData.keyboard.contains(row2Upper)) {
    keyboardData.keyboard.innerHTML = '';
    appendRows(keyboardData.justRows);
    const caps = document.getElementById('CapsLock');
    caps.classList.remove('hovered');
    keyboardData.isCapsActive = false;
  } else if (keyboardData.keyboard.contains(row2RusUpper)) {
    keyboardData.keyboard.innerHTML = '';
    appendRows(keyboardData.rowsRus);
    const caps = document.getElementById('CapsLock');
    caps.classList.remove('hovered');
    keyboardData.isCapsActive = false;
  }
}

export default capsDown;
