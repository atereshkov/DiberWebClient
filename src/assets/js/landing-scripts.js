(function ($) {
  "use strict";

  $('body').scrollspy({
    target: '.fixed-top',
    offset: 70
  });

  new WOW().init();

  $('a.page-scroll').bind('click', function (event) {
    var $ele = $(this);
    var href = $ele.attr('href');
    if (href.indexOf('#') != -1) {
      var hash = href.substring(href.indexOf('#'), href.length);
      console.log(hash);
      $('html, body').stop().animate({
        scrollTop: ($(hash).offset().top - 60)
      }, 1450, 'easeInOutExpo');
      event.preventDefault();
    }
  });

  $('#collapsingNavbar li a').click(function () {
    /* always close responsive nav after click */
    $('.navbar-toggler:visible').click();
  });

  $('#galleryModal').on('show.bs.modal', function (e) {
    $('#galleryImage').attr("src", $(e.relatedTarget).data("src"));
  });

  $('[data-toggle=popover]').popover();

  // Scroll to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#back-to-top')
        .fadeIn(300);
    } else {
      $('#back-to-top')
        .fadeOut(300);
    }
  });

  // Scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $('#back-to-top').tooltip('show');

})(jQuery);
