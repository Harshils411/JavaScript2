var a = gsap.timeline();
a.to(".page2 #one",{
    width:"100%",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top -0.5%",
        end:"top -100%",
        scrub:3,
        pin:true
    }
    
})

a.to(".page1 h1",{
    transform:"translateX(-80%)",
    
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:"body",
        // markers:true,
        scrub:4,
        start:"top 2%",
        end:"top -80%",
        pin:true
    }
})