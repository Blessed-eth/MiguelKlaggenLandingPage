function initMenuToggle() {
    const burgerMenu = document.getElementById('burgermenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeButton = document.getElementById('closeButton');
  
    // Toggle mobile menu on burger menu click
    burgerMenu.addEventListener('click', () => {
      mobileMenu.style.display = 'flex';
      setTimeout(() => {
        mobileMenu.style.opacity = '1';
      }, 10); 
    });
  
    // Hide mobile menu on close button click
    closeButton.addEventListener('click', () => {
      mobileMenu.style.opacity = '0';
      setTimeout(() => {
        mobileMenu.style.display = 'none';
      }, 300);
    });
  }