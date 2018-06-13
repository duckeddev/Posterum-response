// Script SmothScroll

  $(function () {
    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
  });

// Script Tabs

  $(function () {
    $(".tab_item").not(":first").hide();
    $(".what-we-do-list .what-we-do-item").click(function () {
      $(".what-we-do-list .what-we-do-item").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
  });

// Script Slider
  

// Preloader

$(window).on('load', function () {
  $preloader = $('.loaderArea'),
    $loader = $preloader.find('.loader');
  $loader.fadeOut();
  $preloader.delay(350).fadeOut('slow');
});



