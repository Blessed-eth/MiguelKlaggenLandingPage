function initVideoLazyLoad() {
    const video = document.getElementById('experience-video');
    const placeholder = document.getElementById('video-placeholder');
  
    video.addEventListener('canplaythrough', () => {
      placeholder.classList.add('hidden');
      video.classList.remove('hidden');
      video.play();
    });
  
    video.load();
  }
  document.addEventListener("DOMContentLoaded", function() {
    const splineAnimations = document.querySelectorAll('.spline-animation');
    const placeholders = document.querySelectorAll('.placeholder');
  
    // Check viewport width to ensure animations only load on larger devices
    console.log(`Viewport width is ${window.innerWidth}px`);
    
    if (window.innerWidth > 680) {
      splineAnimations.forEach((spline, index) => {
        console.log(`Attempting to load animation for: ${spline.id}`);
  
        // Event listener for successful loading of each spline-viewer
        spline.addEventListener('load', () => {
          console.log(`Animation loaded successfully: ${spline.id}`);
          placeholders[index].classList.add('hidden'); // Hide placeholder
          spline.classList.remove('hidden'); // Show 3D animation
        });
  
        // Event listener for error (in case the animation fails to load)
        spline.addEventListener('error', () => {
          console.error(`Error loading animation: ${spline.id}`);
        });
      });
    } else {
      console.log("Animations will not load on smaller screens.");
    }
  });