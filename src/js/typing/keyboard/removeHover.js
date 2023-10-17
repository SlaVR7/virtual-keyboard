function removeHover(event) {
  const button = document.querySelector(`#${event.code}`);
  if (!button) {
    return;
  }
  if (event.code !== 'CapsLock') {
    button.classList.remove('hovered');
  }
}

export default removeHover;
