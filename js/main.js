(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });


 // owl-carousel
 $('.mx-slider').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  nav:false,
  navText: ['<img src="images/arrow-left.png" alt="">','<img src="images/arrow-right.png" alt="">'],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
          nav:true
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
});


})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });

  // preloader
  $("#preloader").fadeOut(500);

})











