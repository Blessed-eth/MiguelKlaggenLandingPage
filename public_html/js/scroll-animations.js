document.addEventListener('DOMContentLoaded', () => {
    console.log("Scroll animation script loaded and running.");
});

document.addEventListener('scroll', () => {
    const firstAnimationFrameCount = 136; // Frames in the first animation
    const secondAnimationFrameCount = 80;  // Frames in the second animation
    
    // Sections
    const timelineSection = document.getElementById('cd-timeline');
    const sharedBackgroundWrapper = document.querySelector('.shared-background-wrapper');
    const transitionSection = document.querySelector('.second-animation-transition-section');
    const chooseWalletSection = document.querySelector('.choose-wallet');
    const assistanceSection = document.querySelector('.assistance');

    if (timelineSection && sharedBackgroundWrapper) {
        const sectionTop = timelineSection.offsetTop;
        const sectionHeight = sharedBackgroundWrapper.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Calculate scroll progress for the timeline section
        const sectionScroll = scrollPosition - sectionTop;
        
        // Extended height for smoother first animation transition
        const extendedHeight = sectionHeight + window.innerHeight * 1.5;
        const scrollFraction = sectionScroll / extendedHeight;

        // Check and display logs for timeline and first animation frame loading
        if (scrollFraction < 0.95) {
            const frameIndex = Math.min(firstAnimationFrameCount - 1, Math.floor(scrollFraction * firstAnimationFrameCount));
            timelineSection.style.backgroundImage = `url('/timelinebackground/optimizedvideos/frame-${String(frameIndex).padStart(6, '0')}.webp')`;
            console.log(`Timeline first animation frame: /timelinebackground/optimizedvideos/frame-${String(frameIndex).padStart(6, '0')}.webp`);
        } 
        // Initiate the second animation upon nearing the end of the first
        else if (scrollFraction >= 0.95) {
            const transitionScrollFraction = (scrollFraction - 0.95) / 0.3; 
            const frameIndex = Math.min(secondAnimationFrameCount - 1, Math.floor(transitionScrollFraction * secondAnimationFrameCount));

            // Apply background to the transition, choose-wallet, and assistance sections
            if (transitionSection) {
                transitionSection.style.backgroundImage = `url('/blockchain_revolution_animation/frame-${String(frameIndex).padStart(6, '0')}.webp')`;
                console.log(`Transition second animation frame: /blockchain_revolution_animation/frame-${String(frameIndex).padStart(6, '0')}.webp`);
            }
            if (chooseWalletSection) {
                chooseWalletSection.style.backgroundImage = `url('/blockchain_revolution_animation/frame-${String(frameIndex).padStart(6, '0')}.webp')`;
                console.log(`Choose wallet section second animation frame: /blockchain_revolution_animation/frame-${String(frameIndex).padStart(6, '0')}.webp`);
            }
            if (assistanceSection) {
                assistanceSection.style.backgroundImage = `url('/blockchain_revolution_animation/frame-${String(frameIndex).padStart(6, '0')}.webp')`;
                console.log(`Assistance section second animation frame: /blockchain_revolution_animation/frame-${String(frameIndex).padStart(6, '0')}.webp`);
            }
        }
    }
});