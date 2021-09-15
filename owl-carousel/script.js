$('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    responsiveRefreshRate: 20,
    autoplay: true,
    autoplayHoverPause: true
});

$(document).ready(function () {
    $("#humburger-btn").click(function() {
      $("#menu-mobile").css("display", "block");
    });
  
    $("#menu-mobile-close").click(function() {
      $("#menu-mobile").css("display", "none");
    });
  });