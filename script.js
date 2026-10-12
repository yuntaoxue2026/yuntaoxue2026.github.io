const openButtons = document.querySelectorAll('[data-dialog]');
const dialogs = document.querySelectorAll('.topic-dialog');

openButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.dialog);
    if (!dialog) return;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});

dialogs.forEach((dialog) => {
  const closeButton = dialog.querySelector('.dialog-close');
  closeButton.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    dialog.querySelectorAll('details[open]').forEach((detail) => detail.removeAttribute('open'));
  });
});
