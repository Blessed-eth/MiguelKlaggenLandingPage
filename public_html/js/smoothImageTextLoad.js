function initSmoothImageTextLoad() {
    const heroImage = document.getElementById('hero-image');
    const heroText = document.getElementById('hero-text');
  
    setTimeout(() => heroImage.classList.add('opacity-100'), 1500);
    setTimeout(() => heroText.classList.add('opacity-100'), 2000);
  }