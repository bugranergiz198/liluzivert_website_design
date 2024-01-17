const backgroundwall = document.querySelector(".backgroundwall");
const video = backgroundwall.querySelector("video");
const introduction = backgroundwall.querySelector(".introduction");
const box1 = backgroundwall.querySelector(".box1");
const box2 = backgroundwall.querySelector(".box2");



//end section

const mainpart2 = document.querySelector(".mainpart2");
const end = mainpart2.querySelector("h1");
//SCROLL MAGIC

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    duration:4000,
    triggerelement:backgroundwall,
    triggerhook:0
})
.setPin(backgroundwall)
.addTo(controller);



//introduction animation
const introAnim = TweenMax.fromTo(introduction,3,{opacity:0},{opacity:1});


const scene2 = new ScrollMagic.Scene({
    duration:3000,
    triggerelement:backgroundwall,
    triggerhook:0
}).setTween(introAnim).addTo(controller);

//box animation




