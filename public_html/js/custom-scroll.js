document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".horizontal-section");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".scroll-container",
            pin: true,
            scrub: 1,
            end: "+=3000"
        }
    });
});

// Detect iOS devices
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isIOS) {
  document.querySelectorAll('.parallax-section').forEach(section => {
    section.classList.add('disable-parallax'); // Add a class to modify background behavior
  });
}
