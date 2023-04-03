import gsap from "gsap";

export const scrollAnimation = (position,target,onUpdate) => {
    const tl = gsap.timeline()

    tl.to(position, {
      x: -4.0421266135,
      y: -12.4927665863,
      z: -7.9603975778,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    }).to(target, {
      x: 1.2446004341,
      y: -0.5323025354,
      z: -1.1803875217,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
}