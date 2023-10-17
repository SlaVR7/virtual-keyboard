import {
  row1, row1Rus,
  row1RusUpper,
  row1Upper,
  row2, row2Rus, row2RusUpper,
  row2Upper,
  row3, row3Rus, row3RusUpper,
  row3Upper,
  row4, row4Rus, row4RusUpper,
  row4Upper,
  row5, row5Rus, row5RusUpper,
  row5Upper,
} from './createElements';

const keyboardData = {
  isShiftActive: false,
  isCapsActive: false,
  helpfulKeysCodes: ['Backspace', 'Tab', 'CapsLock', 'Caps Lock', 'Enter', 'shift', 'ctrl', 'alt', 'win', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'AltLeft', 'MetaLeft', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'],
  str: '',
  textarea: document.getElementById('textarea'),
  keyboard: document.querySelector('.keyboard'),
  justRows: [row1, row2, row3, row4, row5],
  rowsUpper: [row1Upper, row2Upper, row3Upper, row4Upper, row5Upper],
  rowsRusUpper: [row1RusUpper, row2RusUpper, row3RusUpper, row4RusUpper, row5RusUpper],
  rowsRus: [row1Rus, row2Rus, row3Rus, row4Rus, row5Rus],
};

export default keyboardData;
