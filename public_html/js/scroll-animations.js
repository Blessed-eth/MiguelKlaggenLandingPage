// Animation settings for the fund-recovery section
const totalFundRecoveryFrames = 408;
const fundRecoveryFolder = 'https://miguelklagges.com/publicmedia/deepmindanimation/optimizedvideo/';

// Store the last loaded frame URL to prevent any empty background
let lastLoadedFundRecoveryFrameUrl = `${fundRecoveryFolder}frame-000000.webp`; // Start with the first frame

// Helper function to set background images based on frame index
function setBackgroundImage(section, folder, frameIndex) {
    const imagePath = `${folder}frame-${String(frameIndex).padStart(6, '0')}.webp`;

    const img = new Image();
    img.src = imagePath;

    img.onload = () => {
        section.style.backgroundImage = `url('${imagePath}')`;
        lastLoadedFundRecoveryFrameUrl = imagePath;  // Update the last loaded frame URL
    };

    img.onerror = () => {
        // If the new frame fails to load, keep showing the last successfully loaded frame
        section.style.backgroundImage = `url('${lastLoadedFundRecoveryFrameUrl}')`;
    };
}

// Preload frames for smoother transitions
function preloadFrames(folder, totalFrames) {
    for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        img.src = `${folder}frame-${String(i).padStart(6, '0')}.webp`;
    }
}

// Preload frames for the fund-recovery section
preloadFrames(fundRecoveryFolder, totalFundRecoveryFrames);

// Scroll event listener for fund-recovery section animation
document.addEventListener('scroll', () => {
    const fundRecoverySection = document.getElementById('fund-recovery');

    if (fundRecoverySection) {
        const sectionTop = fundRecoverySection.getBoundingClientRect().top + window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;

        // Calculate scroll fraction based on total scrollable height to the bottom of the page
        const maxScrollDistance = documentHeight - sectionTop - viewportHeight;
        const scrollPosition = window.scrollY - sectionTop;
        const scrollFraction = Math.min(1, scrollPosition / maxScrollDistance);

        const frameIndex = Math.floor(scrollFraction * (totalFundRecoveryFrames - 1));

        // Update the background to the current frame or the last loaded frame
        setBackgroundImage(fundRecoverySection, fundRecoveryFolder, frameIndex);
    }
});

// Navbar fade-out on footer visibility
const bottomNav = document.getElementById('bottomnav');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            bottomNav.classList.add('fade-out');
        } else {
            bottomNav.classList.remove('fade-out');
        }
    });
}, { threshold: 0.1 });

observer.observe(document.querySelector('footer'));