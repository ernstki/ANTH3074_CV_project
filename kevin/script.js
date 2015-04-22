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
      if ($('#side-content')) {
        $('#side-content').fadeIn();
      }
    }, 2000);

    if ($('#side-photo')) {
      window.setTimeout(function() {
        $('#side-photo').fadeIn();
      }, 2500);
    }


    var delay = 4000;
    // Transition all the bullet points
    $('#points li').each(function(){
      fadeInAfterDelay($(this), delay);
      delay += 2000;
    });
  } // beginPresentation()

  // Add an event listener for the spacebar (to advance to to next slide)
  window.addEventListener("keydown", function(e) {
    if (e.keyCode === 32 || e.keyCode === 39) {
      document.location = $('#fwd > a')[0].href;
    } else if (e.keyCode === 37) {
      var backlink = $('#back > a + a')[0];
      if (backlink) { document.location = backlink.href; }
    } else if (e.keyCode === 84) {
      document.location = $('#back > a')[0].href;
    } else if (e.keyCode === 72) {
      document.location = 'index.html';
    }
  }, false);

  // Start the animation for the slide
  cueSlide();

});


