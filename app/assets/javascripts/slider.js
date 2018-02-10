$(document).ready(function($) {
          $('.slider').unslider({
            dots: true, 
            keys: true,
            autoplay: true,
            infinite: true,
            animation: 'vertical',
            autoplay: true,
            speed:  1000,
            delay:  3000,
            arrows: {
                //  Unslider default behaviour
                //prev: '<a class="unslider-arrow prev"><img src="https://i.imgur.com/oN7QgPd.png"/></a>',
                //next: '<a class="unslider-arrow next"><img src="https://i.imgur.com/hRsZydv.png"/></a>',
                prev:  '<i class="fa fa-chevron-circle-left" style="font-size:48px"></i>',
                next:  '<i class="fa fa-chevron-circle-right" style="font-size:48px"></i>',
                //  Example: generate buttons to start/stop the slider autoplaying
                //stop:  '<a class="unslider-pause">Stop</a>',
                //start: '<a class="unslider-play">Play</a>'
              }
          });
})
/*
var unslider = $('.slider').unslider();

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];

        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
});*/
