import keyboardData from '../../keyboardData';

function typeByMouse(event) {
  const lowerHelpfulKeyCodes = keyboardData.helpfulKeysCodes.map((item) => item.toLowerCase());
  const content = event.target.innerHTML;
  const eventTarget = event.target.getAttribute('id');
  if (!eventTarget) {
    return;
  }
  if (!lowerHelpfulKeyCodes.includes(content) && !keyboardData.helpfulKeysCodes.includes(content)) {
    keyboardData.str += content;
  }
  if (eventTarget === 'Enter') {
    keyboardData.str += '\n';
  }
  if (eventTarget === 'Tab') {
    keyboardData.str += '\t';
  }
  if (content === 'backspace' || content === 'Backspace') {
    keyboardData.str = keyboardData.str.slice(0, keyboardData.str.length - 1);
  }
  keyboardData.textarea.value = keyboardData.str;
}

export default typeByMouse;
