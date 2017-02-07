function changeImgSize(){
    var img = this.content.find('img');
    img.css('max-height', window.innerHeight);
    img.css('width', 'auto');
    img.css('max-width', 'auto');
}

// A $( document ).ready() block.
$( document ).ready(function() {
    initAnimateLogo();

    $('#landing-overlay').css('height', (window.innerHeight-51).toString()+'px');

    // Example with multiple objects
    $('#ref0').magnificPopup({
        disableOn: 0,
        items: [
            {
              src: 'assets/referenz/villa_0.jpg'
            },
            {
              src: 'assets/referenz/villa_1.jpg'
            },
            {
              src: 'assets/referenz/villa_2.jpg'
            },
            {
              src: 'assets/referenz/villa_3.jpg'
            },
            {
              src: 'assets/referenz/villa_4.jpg'
            },
            {
              src: 'assets/referenz/villa_5.jpg'
            },
            {
              src: 'assets/referenz/villa_6.jpg'
            }
        ],
        gallery: {
          enabled: true,
          preload: [1,2]
        },
        callbacks: {
            resize: changeImgSize,
            imageLoadComplete:changeImgSize,
            change:changeImgSize
        },
        type: 'image' // this is default type
    });
    $('#ref1').magnificPopup({
        disableOn: 0,
        items: [
            {
              src: 'assets/referenz/praxis_0.jpg'
            },
            {
              src: 'assets/referenz/praxis_1.jpg'
            },
            {
              src: 'assets/referenz/praxis_2.jpg'
            },
            {
              src: 'assets/referenz/praxis_3.jpg'
            },
            {
              src: 'assets/referenz/praxis_4.jpg'
            },
            {
              src: 'assets/referenz/praxis_5.jpg'
            }
        ],
        gallery: {
          enabled: true,
          preload: [1,2]
        },
        callbacks: {
            resize: changeImgSize,
            imageLoadComplete:changeImgSize,
            change:changeImgSize
        },
        type: 'image' // this is default type
    });
    $('#ref2').magnificPopup({
        disableOn: 0,
        items: [
            {
              src: 'assets/referenz/esszimmer_0.jpg'
            },
            {
              src: 'assets/referenz/esszimmer_1.jpg'
            }
        ],
        gallery: {
          enabled: true,
          preload: [1,2]
        },
        callbacks: {
            resize: changeImgSize,
            imageLoadComplete:changeImgSize,
            change:changeImgSize
        },
        type: 'image' // this is default type
    });
    $('#ref3').magnificPopup({
        disableOn: 0,
        items: [
            {
              src: 'assets/referenz/niendorf_0.jpg'
            },
            {
              src: 'assets/referenz/niendorf_1.jpg'
            },
            {
              src: 'assets/referenz/niendorf_2.jpg'
            },
            {
              src: 'assets/referenz/niendorf_3.jpg'
            },
            {
              src: 'assets/referenz/niendorf_4.jpg'
            }
        ],
        gallery: {
          enabled: true,
          preload: [1,2]
        },
        callbacks: {
            resize: changeImgSize,
            imageLoadComplete:changeImgSize,
            change:changeImgSize
        },
        type: 'image' // this is default type
    });
});

function scrollToElementMain(element){
    var combinedHeight = $('#landing-main').outerHeight(true);//+$('#main-quote').outerHeight(true);
    if(window.innerHeight< combinedHeight) {
        $('html,body').animate({scrollTop: $('#landing-main').offset().top-131});
    }else {
        $('html,body').animate({scrollTop: combinedHeight});
    }
}

function scrollToElement(element){
    console.log(element.offset().top);
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
