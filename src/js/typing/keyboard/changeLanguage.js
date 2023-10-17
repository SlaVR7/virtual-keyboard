import keyboardData from '../../keyboardData';
import {
  row2, row2Rus, row2RusUpper, row2Upper,
} from '../../createElements';
import appendRows from '../../createElements/appendRows';

function changeLanguage() {
  let parameter;
  if (keyboardData.keyboard.contains(row2)) {
    parameter = keyboardData.rowsRus;
    localStorage.setItem('lang', 'Russian');
  } else if (keyboardData.keyboard.contains(row2Rus)) {
    parameter = keyboardData.justRows;
    localStorage.setItem('lang', 'English');
  } else if (keyboardData.keyboard.contains(row2Upper)) {
    parameter = keyboardData.rowsRusUpper;
    localStorage.setItem('lang', 'Russian');
  } else if (keyboardData.keyboard.contains(row2RusUpper)) {
    parameter = keyboardData.rowsUpper;
    localStorage.setItem('lang', 'English');
  }
  keyboardData.keyboard.innerHTML = '';
  appendRows(parameter);
  const caps = document.getElementById('CapsLock');
  if ([keyboardData.rowsRusUpper, keyboardData.rowsUpper].includes(parameter)) {
    caps.classList.add('hovered');
  } else {
    caps.classList.remove('hovered');
  }
}

export default changeLanguage;
