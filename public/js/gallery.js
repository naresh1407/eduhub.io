// find the top of each section
var sectionA = $(".section-a").offset().top;

// number of pixels before the section to start animation
var scrollOffset = 100; 

// run this function when the window scrolls
$(window).scroll(function() {  
  
   
  // get the window height on scroll
  var scroll = $(window).scrollTop() + scrollOffset;  
  
  

  // if scroll hits the top of section-a
  if ( scroll > sectionA ) {
    $(".section-a .hero-title").addClass("animate-normal");
    $(".section-a .hero-subtitle").addClass("animate-delay");
  }

});


