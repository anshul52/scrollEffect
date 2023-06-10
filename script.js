var b1 = document.querySelector("#box1");
var b2 = document.querySelector("#box2");
var b3 = document.querySelector("#box3");
var b4 = document.querySelector("#box4");
var b6 = document.querySelector("#box6");
var b7 = document.querySelector("#box7");
var b8 = document.querySelector("#box8");
var b9 = document.querySelector("#box9");
var box = document.querySelectorAll(".box");
var centerbox = document.querySelector("#centerbox");


var tl = gsap.timeline(box,{
    ease: "power1.inOut",
    duration:1
});

tl.from(centerbox,{
    scale:3,
})
tl.to(b1,{
    x:1,
    y:-130
})
tl.to(b2,{
    x:55,
    y:-74
})
tl.to(b3,{
    x:105,
    y:-25
})
tl.to(b4,{
    x:55,
    y:28
})
tl.to(b6,{
    x:0,
    y:85
})
tl.to(b7,{
    x:-58,
    y:28
})
tl.to(b8,{
    x:-110,
    y:-18
})
tl.to(b9,{
    x:-55,
    y:-76
})
tl.repeat(-1);