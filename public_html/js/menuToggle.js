const mobileMenu = document.getElementById('mobileMenu');
const burgerMenu = document.getElementById('burgermenu');
const closeButton = document.getElementById('closeButton');

burgerMenu.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
  mobileMenu.style.display = 'block';
  setTimeout(() => {
    mobileMenu.style.opacity = document.body.classList.contains('menu-open') ? '1' : '0';
  }, 10); // Slight delay for smooth transition
});

closeButton.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  setTimeout(() => {
    mobileMenu.style.opacity = '0';
    setTimeout(() => {
      mobileMenu.style.display = 'none';
    }, 300); // Match CSS transition duration
  }, 10);
});