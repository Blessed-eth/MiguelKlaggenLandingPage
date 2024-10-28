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

  console.log(`Found ${splineAnimations.length} spline animations in the DOM.`);
  const deviceMemory = navigator.deviceMemory || 4;
  const viewportWidth = window.innerWidth;

  console.log(`Viewport width: ${viewportWidth}px, Device memory: ${deviceMemory} GB`);

  if (viewportWidth > 680 && deviceMemory >= 4) {
    console.log("Device meets resource requirements. Setting up animations...");

    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.1 // Animation should be at least 10% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      console.log("Observer callback triggered with entries:", entries);

      entries.forEach(entry => {
        const spline = entry.target;
        const placeholder = spline.nextElementSibling; // Assuming placeholder is the next sibling

        if (entry.isIntersecting) {
          console.log(`Animation ${spline.id} is in the viewport. Attempting to load...`);

          // Initialize a retry counter for tracking load attempts
          let attemptCounter = 0;

          const tryLoadAnimation = () => {
            attemptCounter += 1;
            console.log(`Attempt #${attemptCounter} to load animation: ${spline.id}`);

            if (!spline.classList.contains('loaded')) {
              console.log(`Setting src for: ${spline.id} from data-src.`);
              
              // Set the src from data-src to initiate loading
              spline.src = spline.dataset.src;

              // Event listener for successful loading
              spline.addEventListener('load', () => {
                console.log(`Animation loaded successfully: ${spline.id}`);
                placeholder.classList.add('hidden');
                spline.classList.remove('hidden');
                spline.classList.add('loaded'); // Mark as loaded
                observer.unobserve(spline); // Stop observing once loaded
              });

              // Event listener for error to retry if it fails
              spline.addEventListener('error', () => {
                console.error(`Error loading animation: ${spline.id}. Retrying in 3 seconds...`);
                setTimeout(tryLoadAnimation, 3000); // Retry every 3 seconds
              });
            }
          };

          tryLoadAnimation(); // Start the initial load attempt
        } else {
          console.log(`Animation ${spline.id} is out of the viewport. Not loading to save resources.`);
          // Keep placeholder visible if it's not in the viewport
          placeholder.classList.remove('hidden');
          spline.classList.add('hidden');
        }
      });
    }, observerOptions);

    // Observe each animation element
    splineAnimations.forEach((spline) => {
      console.log(`Observing animation: ${spline.id}`);
      observer.observe(spline);
    });
  } else {
    console.log("Device does not meet resource requirements. Animations will not load.");
    placeholders.forEach(placeholder => placeholder.classList.remove('hidden'));
    splineAnimations.forEach(spline => spline.classList.add('hidden'));
  }
});