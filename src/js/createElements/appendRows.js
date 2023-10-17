import keyboardData from '../keyboardData';

function appendRows(rowsArray) {
  rowsArray.forEach((item) => {
    keyboardData.keyboard.appendChild(item);
  });
}

export default appendRows;
