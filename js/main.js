// Document ready waits for the site to be loaded. All the Java script written must be inside the document ready function

$( document ).ready(function() {

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
