// Animation settings for different sections
const totalTimelineFrames = 136;
const totalFundRecoveryFrames = 408;
const timelineFolder = '/timelinebackground/optimizedvideos/';
const fundRecoveryFolder = '/deepmindanimation/optimizedvideos/';

// Helper function to set background images based on frame index
function setBackgroundImage(section, folder, frameIndex) {
    const imagePath = `${folder}frame-${String(frameIndex).padStart(6, '0')}.webp`;
    section.style.backgroundImage = `url('${imagePath}')`;
}

// Preload all frames for smoother transitions
function preloadFrames(folder, totalFrames) {
    for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        img.src = `${folder}frame-${String(i).padStart(6, '0')}.webp`;
    }
}

// Preload frames for the fund recovery section
preloadFrames(fundRecoveryFolder, totalFundRecoveryFrames);

// Scroll event listener for animations
document.addEventListener('scroll', () => {
    // Timeline Section Animation
    const timelineSection = document.getElementById('cd-timeline');
    if (timelineSection) {
        const sectionTop = timelineSection.getBoundingClientRect().top;
        const sectionHeight = timelineSection.offsetHeight;
        const viewportHeight = window.innerHeight;

        if (sectionTop <= viewportHeight && sectionTop + sectionHeight >= 0) {
            const scrollFraction = Math.min(1, Math.abs(sectionTop) / (sectionHeight + viewportHeight));
            const frameIndex = Math.floor(scrollFraction * (totalTimelineFrames - 1));
            setBackgroundImage(timelineSection, timelineFolder, frameIndex);
        }
    }

    // Fund Recovery Section Animation
    const fundRecoverySection = document.getElementById('fund-recovery');
    const containerInside = fundRecoverySection.querySelector('.container');

    if (fundRecoverySection) {
        const sectionTop = fundRecoverySection.getBoundingClientRect().top;
        const sectionHeight = fundRecoverySection.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Display animation frames when section is in view
        if (sectionTop <= viewportHeight && sectionTop + sectionHeight >= 0) {
            const scrollFraction = Math.min(1, Math.abs(sectionTop) / (sectionHeight - viewportHeight));
            const frameIndex = Math.floor(scrollFraction * (totalFundRecoveryFrames - 1));
            setBackgroundImage(fundRecoverySection, fundRecoveryFolder, frameIndex);

            // Keep the section sticky while playing the animation
            containerInside.style.position = 'sticky';
            containerInside.style.top = '0';
        } else {
            // Keep the last frame as the background when out of view
            setBackgroundImage(fundRecoverySection, fundRecoveryFolder, totalFundRecoveryFrames - 1);
            containerInside.style.position = 'relative';
        }
    }
});

// Navbar fade-out on footer visibility
const bottomNav = document.getElementById('bottomnav');
const footer = document.querySelector('footer');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            bottomNav.classList.add('fade-out');
        } else {
            bottomNav.classList.remove('fade-out');
        }
    });
}, { threshold: 0.1 });

observer.observe(footer);