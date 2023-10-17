import CreateKey from './createKey';

function createRow(rowArray) {
  const rowElements = [];

  rowArray.forEach((rowItem) => {
    const row = document.createElement('div');
    rowItem.forEach((item) => {
      const keyObj = new CreateKey(item.name, item.rusName, item.code);
      row.appendChild(keyObj.getButton());
    });
    row.classList.add('row');
    rowElements.push(row);

    const rowUpper = document.createElement('div');
    rowItem.forEach((item) => {
      const keyObj = new CreateKey(item.name, item.rusName, item.code);
      rowUpper.appendChild(keyObj.getUpperButton());
    });
    rowUpper.classList.add('row');
    rowElements.push(rowUpper);

    const rowRus = document.createElement('div');
    rowItem.forEach((item) => {
      const keyObj = new CreateKey(item.name, item.rusName, item.code);
      rowRus.appendChild(keyObj.getRusButton());
    });
    rowRus.classList.add('row');
    rowElements.push(rowRus);

    const rowRusUpper = document.createElement('div');
    rowItem.forEach((item) => {
      const keyObj = new CreateKey(item.name, item.rusName, item.code);
      rowRusUpper.appendChild(keyObj.getUpperRusButton());
    });
    rowRusUpper.classList.add('row');
    rowElements.push(rowRusUpper);
  });

  return rowElements;
}

export default createRow;
