gsap.registerPlugin(Text);
landingPageAnimation()


function landingPageAnimation(){

    const tl1 = gsap.timeline();

    $('.blur').on('wheel', function(e){
        tl1.to('.blur', {filter: "blur(0px)", duration: 1})
        $('body').removeClass('fixed');
    })

    const tl2 = gsap.timeline();

    let i = 0;

    $('.main-page').on('drag, click', function(){

        if(tl2.isActive()){
            return false
        }

        const mainHeading = new Text('.sm-text, .lg-text', {type:"words, chars", wordDelimiter: " " });
        const started_link =  new Text('.started-link-text', {type:"words, chars" });

    
        if(i === 0){
            i = 1;
            
            gsap.set(".sm-text, .lg-text", {perspective: 400});
            tl2.to('.product-img', {x: "-18vw", duration: 1})
            tl2.to(".sm-text, .lg-text", {visibility: "visible"});
            tl2.from(mainHeading.chars, {duration: 1, opacity:0, scale:0, y:80, x: 80, rotationX:100, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07}, "+=0",);

            return false;
        } 

       

        if (i === 1){
            i = 2;
            tl2.to(mainHeading.chars, { duration: 0.8, opacity: 0, stagger: 0.06},);
            tl2.to('.product-img', {x: "-50vw", duration: 1})
            tl2.to('.box', {right: "-9%", duration: 1.4}, "-=1.4")
            gsap.set('.cls-1', {perspective: 400});
            tl2.from('.cls-1', {duration: 1, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07})
            tl2.from('.cls-box', {duration: 1, x: 200, autoAlpha: 0, ease: "elastic", stagger: 0.2})
            tl2.from(started_link.chars, {duration: 1, opacity:0, scale:0, y:80, x: 100, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07}, "+=0",);

            return false;
        }
        
    })
}














