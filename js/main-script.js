gsap.registerPlugin(Text);
const tl = gsap.timeline();

$('.blur').on('wheel', function(e){
    tl.to('.blur', {filter: "blur(0px)", duration: 1})
    $('body').removeClass('fixed');
}, mainPageAnimation())
 

function mainPageAnimation(){

    const Split_text = new Text('.sm-text, .lg-text', {type:"words, chars", wordDelimiter: " " });
    const started_link =  new Text('.started-link', {type:"words, chars" });
    const chars = Split_text.chars;
    const chars1 = started_link.chars;

    let i = 0;
    $('.main-page').on('drag, click', function(){

        if(tl.isActive()){
            return false
        }

        if (i === 1){
            tl.to(Split_text.chars, { duration: 0.8, opacity: 0, stagger: 0.04
            }, 3);
            tl.to('.product-img', {x: "-50vw", duration: 1})
            tl.to('.box', {right: "-9%", duration: 1.4}, "-=1.4")
            tl.from(chars1, {duration: 0.8, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");
        }


        if(i === 0){
            i = 1;
            
            gsap.set(".sm-text, .lg-text", {perspective: 400});
            tl.to('.product-img', {x: "-18vw", duration: 1})
            tl.to(".sm-text, .lg-text", {visibility: "visible"});
            tl.from(chars, {duration: 0.8, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");
        } 
        
    })
}

// (function () {
//     var $frame  = $('.slider-wrapper');
//     var $wrap   = $frame.parent();

//     // Call Sly on frame
//     $frame.sly({
//         itemNav: 'basic',
//         smart: 1,
//         activateOn: 'click',
//         mouseDragging: 1,
//         touchDragging: 1,
//         releaseSwing: 1,
//         startAt: 0,
//         activatePageOn: 'click',
//         speed: 300,
//         elasticBounds: 1,
//         dragHandle: 1,
//         dynamicHandle: 1,
//         clickBar: 1,

//         prevPage: $wrap.find('.prev'),
// 		nextPage: $wrap.find('.next')
//     });
// }());












