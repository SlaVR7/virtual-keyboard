import keyboardData from '../../keyboardData';

function typeTextByKeyboard(event) {
  const button = document.querySelector(`#${event.code}`);
  if (!button) {
    return;
  }
  if (!['ShiftLeft', 'ShiftRight'].includes(event.code)) {
    button.classList.add('hovered');
  }

  if (!keyboardData.helpfulKeysCodes.includes(event.code)) {
    keyboardData.str += button.innerText;
  }

  switch (event.code) {
    case 'Enter': keyboardData.str += '\n';
      break;
    case 'Tab': keyboardData.str += '\t';
      break;
    case 'ArrowLeft': keyboardData.str += '◄';
      break;
    case 'ArrowUp': keyboardData.str += '▲';
      break;
    case 'ArrowDown': keyboardData.str += '▼';
      break;
    case 'ArrowRight': keyboardData.str += '►';
      break;
    case 'Backspace': keyboardData.str = keyboardData.str.slice(0, keyboardData.str.length - 1);
      break;
    default: break;
  }
  keyboardData.textarea.value = keyboardData.str;
}

export default typeTextByKeyboard;
