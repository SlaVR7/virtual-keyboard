import row1Array from './rows/row1.js';
import row2Array from './rows/row2.js';
import row3Array from './rows/row3.js';
import row4Array from './rows/row4.js';
import row5Array from './rows/row5.js';

export class CreateKey {
  constructor(name, rusName, code) {
    this.name = name;
    this.rusName = rusName;
    this.code = code;
  }

  getButton() {
    const btn = document.createElement('div');
    btn.innerHTML = this.name.toLowerCase();
    btn.classList.add('key');
    if (this.code === 'ShiftLeft' || this.code === 'ShiftRight') btn.classList.add('middleWidth');
    if (this.code === 'Space') btn.classList.add('space');
    if (this.code === 'Tab' || this.code === 'CapsLock' || this.code === 'Backspace' || this.code === 'Enter') btn.classList.add('capsTabWidth');
    btn.setAttribute('id', this.code);
    return btn;
  }

  getUpperButton() {
    const btn = document.createElement('div');
    btn.innerHTML = this.name;
    btn.classList.add('key');
    if (this.code === 'ShiftLeft' || this.code === 'ShiftRight') btn.classList.add('middleWidth');
    if (this.code === 'Space') btn.classList.add('space');
    if (this.code === 'Tab' || this.code === 'CapsLock' || this.code === 'Backspace' || this.code === 'Enter') btn.classList.add('capsTabWidth');
    btn.setAttribute('id', this.code);
    return btn;
  }

  getRusButton() {
    const btn = document.createElement('div');
    btn.innerHTML = this.rusName.toLowerCase();
    btn.classList.add('key');
    if (this.code === 'ShiftLeft' || this.code === 'ShiftRight') btn.classList.add('middleWidth');
    if (this.code === 'Space') btn.classList.add('space');
    if (this.code === 'Tab' || this.code === 'CapsLock' || this.code === 'Backspace' || this.code === 'Enter') btn.classList.add('capsTabWidth');
    btn.setAttribute('id', this.code);
    return btn;
  }

  getUpperRusButton() {
    const btn = document.createElement('div');
    btn.innerHTML = this.rusName;
    btn.classList.add('key');
    if (this.code === 'ShiftLeft' || this.code === 'ShiftRight') btn.classList.add('middleWidth');
    if (this.code === 'Space') btn.classList.add('space');
    if (this.code === 'Tab' || this.code === 'CapsLock' || this.code === 'Backspace' || this.code === 'Enter') btn.classList.add('capsTabWidth');
    btn.setAttribute('id', this.code);
    return btn;
  }
}

// CREATE ROW 1

export const row1 = document.createElement('div');
row1Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row1.appendChild(qwe.getButton());
});
row1.classList.add('row');

export const row1Upper = document.createElement('div');
row1Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row1Upper.appendChild(qwe.getUpperButton());
});
row1Upper.classList.add('row');

export const row1Rus = document.createElement('div');
row1Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row1Rus.appendChild(qwe.getRusButton());
});
row1Rus.classList.add('row');

export const row1RusUpper = document.createElement('div');
row1Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row1RusUpper.appendChild(qwe.getUpperRusButton());
});
row1RusUpper.classList.add('row');

// CREATE ROW 2

export const row2 = document.createElement('div');
row2Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row2.appendChild(qwe.getButton());
});
row2.classList.add('row');

export const row2Upper = document.createElement('div');
row2Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row2Upper.appendChild(qwe.getUpperButton());
});
row2Upper.classList.add('row');

export const row2Rus = document.createElement('div');
row2Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row2Rus.appendChild(qwe.getRusButton());
});
row2Rus.classList.add('row');

export const row2RusUpper = document.createElement('div');
row2Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row2RusUpper.appendChild(qwe.getUpperRusButton());
});
row2RusUpper.classList.add('row');

// CREATE ROW 3

export const row3 = document.createElement('div');
row3Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row3.appendChild(qwe.getButton());
});
row3.classList.add('row');

export const row3Upper = document.createElement('div');
row3Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row3Upper.appendChild(qwe.getUpperButton());
});
row3Upper.classList.add('row');

export const row3Rus = document.createElement('div');
row3Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row3Rus.appendChild(qwe.getRusButton());
});
row3Rus.classList.add('row');

export const row3RusUpper = document.createElement('div');
row3Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row3RusUpper.appendChild(qwe.getUpperRusButton());
});
row3RusUpper.classList.add('row');

// CREATE ROW 4

export const row4 = document.createElement('div');
row4Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row4.appendChild(qwe.getButton());
});
row4.classList.add('row');

export const row4Upper = document.createElement('div');
row4Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row4Upper.appendChild(qwe.getUpperButton());
});
row4Upper.classList.add('row');

export const row4Rus = document.createElement('div');
row4Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row4Rus.appendChild(qwe.getRusButton());
});
row4Rus.classList.add('row');

export const row4RusUpper = document.createElement('div');
row4Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row4RusUpper.appendChild(qwe.getUpperRusButton());
});
row4RusUpper.classList.add('row');

// CREATE ROW 5

export const row5 = document.createElement('div');
row5Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row5.appendChild(qwe.getButton());
});
row5.classList.add('row');

export const row5Upper = document.createElement('div');
row5Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row5Upper.appendChild(qwe.getUpperButton());
});
row5Upper.classList.add('row');

export const row5Rus = document.createElement('div');
row5Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row5Rus.appendChild(qwe.getRusButton());
});
row5Rus.classList.add('row');

export const row5RusUpper = document.createElement('div');
row5Array.forEach((item) => {
  const qwe = new CreateKey(item.name, item.rusName, item.code);
  row5RusUpper.appendChild(qwe.getUpperRusButton());
});
row5RusUpper.classList.add('row');
