Zepto(function($) {

  function fadeInAfterDelay($el, delay) {
    window.setTimeout(function() { $el.fadeIn(); }, delay);
  }

  function cueSlide() {
    //$('#points li').hide();
    $('.init-hide').each(function() {
      $(this).hide();
      $(this).removeClass('init-hide');
    });

    window.setTimeout(function() {
      $('#banner').fadeIn();
    }, 500);

    window.setTimeout(function() {
      $('#main').fadeIn();
    }, 2000);

    var delay = 4000;
    // Transition all the bullet points
    $('#points li').each(function(){
      fadeInAfterDelay($(this), delay);
      delay += 2000;
    });
  } // beginPresentation()

  cueSlide();
});


