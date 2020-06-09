console.log('jQuery is connected', $)


$(document).ready(function() {
    $('#about').click(function(event) {
      $('body, html').animate({
        scrollTop: $("#aboutContent").offset().top
      }, 600);
    });
  });

  $(document).ready(function() {
    $('#projects').click(function(event) {
      $('body, html').animate({
        scrollTop: $("#projectsContent").offset().top
      }, 600);
    });
  });


  $(document).ready(function() {
    $('#contact').click(function(event) {
      $('body, html').animate({
        scrollTop: $("#contactContent").offset().top
      }, 600);
    });
  });