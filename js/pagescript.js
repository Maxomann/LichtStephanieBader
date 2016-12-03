// A $( document ).ready() block.
$( document ).ready(function() {
    initAnimateLogo();
    $('landing-overlay').height(document.body.clientHeight-51);
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
    console.log(overlay);
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
