jQuery(document).ready(function($) {
          $('.slider').unslider({
            dots: true, 
            keys: true,
            autoplay: true,
            arrows: true,
            infinite: true,
            animation: 'vertical',
            autoplay: true,
            speed:  1000,
            delay:  3000
          });
});

$('.slider').on('init', function () {
  $('.slider').css({
    height: 'auto',
    visibility: 'visible'
  });
});