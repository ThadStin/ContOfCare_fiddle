//------------------------------------------------------//
// Setup ScrollTrigger
//------------------------------------------------------//
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  // Defaults are used by all ScrollTriggers
  //events: "onEnter",//onLeave onEnterBack onLeaveBack",
  toggleActions: "restart pause resume pause",
  //options: "play, pause, resume, reset, restart, complete, reverse, none",
 markers: true, // Easily remove markers for production
});
// END Setup ScrollTrigger -------------------------------------//
let sections = gsap.utils.toArray(".text");

const timeline = gsap.timeline({
  scrollTrigger: {
    id: "CONTAINER", // Custom label to the marker
    trigger: ".container", // What element triggers the scroll
    scrub: true, // Add a small delay of scrolling and animation. `true` is direct
    start: "top top+=5%+", // Can be top, center, bottom
    end: "+=200%", // Can be top, center, bottom
    pin: true
  }
});

let stagger = 0.9

timeline
.from(sections, {opacity: 0, stagger:stagger })
.to(sections, {opacity: 0, stagger:stagger }, stagger)


// gsap.registerPlugin(ScrollTrigger);
//
// gsap.utils.toArray(".text").forEach((text, i) => {
//   ScrollTrigger.create({
//     trigger: text,
//     start: "top top",
//     pin: true,
//     pinSpacing: false
//   });
// });



// ScrollTrigger.create({
//   snap: 1 / 4 // snap whole page to the closest section!
// });
