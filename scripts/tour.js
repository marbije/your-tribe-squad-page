gsap.registerPlugin(ScrollTrigger);

// Select all the articles in the horizontal-scroll--container
let sections = gsap.utils.toArray(".horizontal-scroll--container article");

// Create the horizontal scroll animation
let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1), // Moves all sections left, based on the number of sections
  ease: "none", // No easing for smooth scroll
  scrollTrigger: {
    trigger: ".horizontal-scroll--container", // Target the horizontal scroll container
    pin: true, // Pin the container while scrolling
    scrub: 0.3, // Smooth scrubbing
    end: "+=3000", // Extend the scroll duration to fit the content
  }
});

/* Javascript cheatsheet: https://ilovecoding.org/blog/js-cheatsheet */
/* Used GSAP for this JS animation and explained a bit of the JS code */