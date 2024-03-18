const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger: .2,
    y: 10,
    ease:"power2",
    duration:1 ,
    opacity: 0

})


Shery.textAnimate("#headings h1"  , {
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
  });

gsap.from(".anim2",{
    y:50,
    opacity:0,
    stagger:.2,
    ease: "power4",
    duration: 1,
}) 

Shery.imageEffect("#imgtxt img",{
    style: 4,
    config:{"uColor":{"value":true},"uSpeed":{"value":1,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.91,"range":[0,5]},"uFrequency":{"value":4.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":35.63},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500071729272652},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0.010752688172043001}},"shapeScale":{"value":{"x":0.66,"y":1}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.58,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})


Shery.imageEffect(".imgeff img ",{
    style: 5,
    config:{"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.85,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666939733809},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
     
})

gsap.from("#imgtxt img",{
    y: "70",
    opacity:0,
    duration: 2,
    ease: Expo,
})

Shery.imageEffect("#bimg",{
    style:5,
    config:{"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.218034052881256},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.28,"range":[1,15]},"durationOut":{"value":0.51,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.09,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.21,"range":[0,2]},"discard_threshold":{"value":0.44,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.34,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
    gooey:true, 
})


document.querySelector("#future button")
.addEventListener("mouseover",function(){
    gsap.to("#future video",{
        opacity:1,
        duration:1,
        ease:"power4"
    })
})

document.querySelector("#future button")
.addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity:0,
        duration:1,
        ease:"power4"
    })
})