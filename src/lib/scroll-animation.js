import gsap from "gsap";

export const scrollAnimation = (position,target,onUpdate) => {
    const tl = gsap.timeline()

    tl.to(position, {
      x: -5.3,
      y: -13.2385,
      z: -2.18441,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    }).to(target, {
      x: -0.37520,
      y: 0.134524,
      z: -0.20900,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
}