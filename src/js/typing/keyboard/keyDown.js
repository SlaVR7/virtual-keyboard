import keyboardData from '../../keyboardData';
import changeLanguage from './changeLanguage';
import capsDown from './capsDown';
import shiftDown from './shiftDown';

function keyDown(event) {
  if (event.altKey || event.keyCode === 9) event.preventDefault();

  if (event.code === 'AltLeft' && event.ctrlKey) {
    changeLanguage();
  } else if (event.code === 'CapsLock') {
    capsDown();
  } else if (!keyboardData.isShiftActive && ['ShiftLeft', 'ShiftRight'].includes(event.code)) {
    shiftDown(event);
  }

  const caps = document.getElementById('CapsLock');

  if (event.shiftKey && caps.classList.contains('hovered') && !keyboardData.isCapsActive) {
    caps.classList.remove('hovered');
  } else if (event.shiftKey && !caps.classList.contains('hovered') && keyboardData.isCapsActive) {
    caps.classList.add('hovered');
  }
}

export default keyDown;
