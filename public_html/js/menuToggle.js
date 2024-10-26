const mobileMenu = document.getElementById('mobileMenu');
const burgerMenu = document.getElementById('burgermenu');
const closeButton = document.getElementById('closeButton');

burgerMenu.addEventListener('click', () => {
  if (mobileMenu.classList.contains('show')) {
    mobileMenu.classList.remove('show');
    setTimeout(() => {
      mobileMenu.style.display = 'none'; // Hide completely after fade-out
    }, 300); // Duration should match CSS transition time
  } else {
    console.log("Showing mobile menu");
    mobileMenu.style.display = 'block'; // Show immediately
    setTimeout(() => {
      mobileMenu.classList.add('show'); // Fade in
    }, 10); // Slight delay to allow display change to take effect
  }
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
  setTimeout(() => {
    mobileMenu.style.display = 'none'; // Hide completely after fade-out
  }, 300); // Duration should match CSS transition time
});