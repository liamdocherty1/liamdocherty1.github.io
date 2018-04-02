jQuery(document).ready(function($) {
    $('.type-it').typeIt({
        content: 'Hi, my name is Liam Docherty'
    });
});

const nav = document.querySelector('nav');

// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;

//     if (scrollY < 100) {
//         nav.classList.remove('scrolled-nav');
//     } else {
//         nav.classList.add('scrolled-nav');
//     }
// });
// initialize the smooth scroll code
var scroll = new SmoothScroll('a[href*="#"]');

jQuery(document).ready(function($) {


    $(document).on("scroll", function() {
        const features_top = $(".features-icons").position().top;
        const top_of_window = $(window).scrollTop();

        if (top_of_window >= features_top) {
$('.navbar').css('display', 'flex') // display: flex
        } else {
            $(".navbar").hide();
        }
    });
});


var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
