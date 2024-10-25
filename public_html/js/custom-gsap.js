document.addEventListener('DOMContentLoaded', function () {
    // GSAP Basic Smooth Scroll between sections
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".section").forEach(section => {
        gsap.from(section, {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reset"
            }
        });
    });

    // GSAP for text animation (phrase by phrase)
    let phrases = document.querySelectorAll('.animate-text');
    phrases.forEach(phrase => {
        let chars = phrase.textContent.split("");
        phrase.textContent = "";
        chars.forEach((char, i) => {
            let span = document.createElement("span");
            span.textContent = char;
            span.style.opacity = 0;
            phrase.appendChild(span);

            gsap.to(span, {
                opacity: 1,
                delay: i * 0.05,
                ease: "power2.inOut",
                duration: 0.5
            });
        });
    });

    // Horizontal scroll (if needed)
    gsap.to(".horizontal-section", {
        xPercent: -100 * (gsap.utils.toArray(".horizontal-section").length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-scroll-container",
            pin: true,
            scrub: true,
            end: "+=3000",
        }
    });
});