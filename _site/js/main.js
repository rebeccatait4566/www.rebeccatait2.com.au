// Document ready waits for the site to be loaded. All the Java script written must be inside the document ready function

$( document ).ready(function() {

// This awesome hamburger code is created by Daniel Swinkels who can be found in code pen
  $(".burger-button").click(function(){
  $(".burger-button").toggleClass("active");
  $(".burger-menu").slideToggle();
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
