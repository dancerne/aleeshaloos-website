const dialog = document.querySelector('.art-dialog');
const dialogArt = document.querySelector('.dialog-art');
let openedFrom;

document.querySelectorAll('.art-button').forEach((button) => {
  button.addEventListener('click', () => {
    openedFrom = button;
    document.querySelector('#dialog-title').textContent = button.dataset.title;
    const artwork = button.querySelector('.art-window').cloneNode(true);
    artwork.querySelector('img').loading = 'eager';
    dialogArt.replaceChildren(artwork);
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  openedFrom?.focus({ preventScroll: true });
});
