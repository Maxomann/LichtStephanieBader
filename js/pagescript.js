// A $( document ).ready() block.
$( document ).ready(function() {
    initAnimateLogo();

    $(".rslides").responsiveSlides({
      auto: false,             // Boolean: Animate automatically, true or false
      speed: 500,            // Integer: Speed of the transition, in milliseconds
      timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
      pager: true,           // Boolean: Show pager, true or false
      nav: false,             // Boolean: Show navigation, true or false
      random: false,          // Boolean: Randomize the order of the slides, true or false
      pause: false,           // Boolean: Pause on hover, true or false
      pauseControls: true,    // Boolean: Pause when hovering controls, true or false
      prevText: "Previous",   // String: Text for the "previous" button
      nextText: "Next",       // String: Text for the "next" button
      maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
      navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
      manualControls: "",     // Selector: Declare custom pager navigation
      namespace: "rslides",   // String: Change the default namespace used
      before: function(){},   // Function: Before callback
      after: function(){}     // Function: After callback
    });
});

function scrollToElement(element){
    if(element===undefined){
        $('html,body').animate({scrollTop: $('body').offset().top-51});
    }else{
        $('html,body').animate({scrollTop: element.offset().top-51});
    }
}

function initAnimateLogo() {
    var overlay = document.getElementById('landing-overlay');
    if(overlay !== null) {
        var animationSteps = document.getElementsByClassName('landing-overlay-image');
        var arrow = document.getElementById('landing-arrow-down');
        if(animationSteps.length !== 3){
            console.log("error: animationSteps.length = " + animationSteps.length.toString());
        }
        window.setTimeout(function(){
            animationSteps[0].style.opacity = 1;
            window.setTimeout(function(){
                animationSteps[1].style.opacity = 1;
                window.setTimeout(function(){
                    animationSteps[2].style.opacity = 1;
                    window.setTimeout(function(){
                        arrow.style.opacity = 1;
                    }, 1800);
                }, 1800);
            }, 1800);
        }, 400);
    }
}
