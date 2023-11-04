const tl = gsap.timeline();


tl.from(".hero .img", {opacity: 0})
.from(".hero .intro", {opacity: 0})

gsap.from(".skills .img-side", {opacity: 0, scrollTrigger: {
    trigger: ".skills",
    start: "top center",
    end: "bottom bottom",
    scrub: 0.5,
}})
gsap.from(".skills .skills-side", {opacity: 0, scrollTrigger: {
    trigger: ".skills",
    start: "top center",
    end: "bottom bottom",
    scrub: 0.5,
}})

gsap.from(".services .img-side", {opacity: 0, scrollTrigger: {
    trigger: ".services",
    start: "top center",
    end: "bottom bottom",
    scrub: 0.5,
}})
gsap.from(".services .services-side", {opacity: 0, scrollTrigger: {
    trigger: ".services",
    start: "top center",
    end: "bottom bottom",
    scrub: 0.5,
}})


gsap.from(".projects .head", {opacity: 0, scrollTrigger: {
    trigger: ".projects",
    start: "top center",
    end: "bottom bottom",
    scrub: 0.5,
}})
gsap.from(".projects .wrapper", {opacity: 0, scrollTrigger: {
    trigger: ".projects",
    start: "top center",
    end: "bottom bottom",
    scrub: 0.5,
}})

gsap.from(".testimonials .head", {opacity: 0, scrollTrigger: {
    trigger: ".testimonials",
    start: "top center",
    end: "bottom bottom",
    scrub: 0.5,
}})
gsap.from(".testimonials .con", {opacity: 0, scrollTrigger: {
    trigger: ".testimonials",
    start: "top center",
    end: "bottom bottom",
    scrub: 0.5,
}})


gsap.from(".education .text-side", {opacity: 0, scrollTrigger: {
    trigger: ".education",
    start: "top center",
    end: "bottom bottom",
    scrub: 0.5,
}})
gsap.from(".education .img-side", {opacity: 0, scrollTrigger: {
    trigger: ".education",
    start: "top center",
    end: "bottom bottom",
    scrub: 0.5,
}})

gsap.from(".contact .img", {opacity: 0, scrollTrigger: {
    trigger: ".contact",
    start: "top center",
    end: "bottom bottom",
    scrub: 0.5,
}})
gsap.from(".contact .form", {opacity: 0, scrollTrigger: {
    trigger: ".contact",
    start: "top center",
    end: "bottom bottom",
    scrub: 0.5,
}})