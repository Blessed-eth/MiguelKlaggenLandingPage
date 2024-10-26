document.addEventListener("DOMContentLoaded", () => {
    const timelineBlocks = document.querySelectorAll(".cd-timeline-block");
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once the block is visible
        }
      });
    }, observerOptions);
  
    timelineBlocks.forEach((block) => observer.observe(block));
  });