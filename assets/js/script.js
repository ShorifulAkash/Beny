// scroll navbar
$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('.header').addClass('in');
        console.log("OK");
    } 
    else {
        $('.header').removeClass('in');
    }
});

// OwlCarousel section
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: false,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        nav: false,
        responsive: {
            0: {
            items: 1
            },
            600: {
            items: 1
            },
            1024: {
            items: 1
            },
            1366: {
            items: 1
            }
        }
    });
    
});


// Progress bar
// jQuery(document).ready(function(){
  
//     jQuery('.progress-bar').each(function() {
//       jQuery(this).find('.progress-content').animate({
//         width:jQuery(this).attr('data-percentage')
//       },5000);
      
//       jQuery(this).find('.progress-number-mark').animate(
//         {left:jQuery(this).attr('data-percentage')},
//         {
//          duration: 5000,
//          step: function(now, fx) {
//            var data = Math.round(now);
//            jQuery(this).find('.percent').html(data + '%');
//          }
//       });  
//     });
//   });
$(window).on('scroll',function(){
  let scroll = $(window).scrollTop();
  let oTop = $('.progres-bar').offset().top - window.innerHeight;
  if(scroll>oTop){
    $(".progres-bar").addClass("progressbar-active");
  }
  else{
    $(".progres-bar").removeClass("progressbar-active");
  }
});
