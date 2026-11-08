document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.navbar-burger').forEach(button => {
    const menu = document.getElementById(button.dataset.target);
    if (!menu) return;
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(expanded));
      button.classList.toggle('is-active', expanded);
      menu.classList.toggle('is-active', expanded);
    });
  });
});
