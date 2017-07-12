// Document ready waits for the site to be loaded. All the Java script written must be inside the document ready function

$( document ).ready(function() {

// This awesome hamburger code is created by Daniel Swinkels who can be found in code pen
  $(".burger-button").click(function(){
  $(".burger-button").toggleClass("active");
  $(".burger-menu").slideToggle();
});

// Script to make the page smooth scroll on devices
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // log
  console.log( "ready!" );

  // If I click on the CTA button
  $('.cta-button, #form-wrapper i').click(function(){

    // I want to show the form
    $('body').toggleClass('form-hide form-show');

  });



  // If i click on the X inside the form

  // I want the form to hide

});
