class CreateKey {
  constructor(name, rusName, code) {
    this.name = name;
    this.rusName = rusName;
    this.code = code;
  }

  createBtn() {
    const btn = document.createElement('div');
    btn.classList.add('key');
    if (['ShiftLeft', 'ShiftRight'].includes(this.code)) btn.classList.add('middleWidth');
    if (this.code === 'Space') btn.classList.add('space');
    if (['Tab', 'CapsLock', 'Backspace', 'Enter'].includes(this.code)) btn.classList.add('capsTabWidth');
    btn.setAttribute('id', this.code);
    return btn;
  }

  getButton() {
    const btn = this.createBtn();
    btn.innerHTML = this.name.toLowerCase();
    return btn;
  }

  getUpperButton() {
    const btn = this.createBtn();
    btn.innerHTML = this.name;
    return btn;
  }

  getRusButton() {
    const btn = this.createBtn();
    btn.innerHTML = this.rusName.toLowerCase();
    return btn;
  }

  getUpperRusButton() {
    const btn = this.createBtn();
    btn.innerHTML = this.rusName;
    return btn;
  }
}

export default CreateKey;
