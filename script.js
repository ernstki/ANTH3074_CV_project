// Source: https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

// Source: http://www.456bereastreet.com/archive/201112/how_to_adjust_an_iframe_elements_height_to_fit_its_content/
function setIframeHeight(iframe) {
  if (iframe) {
    var iframeWin = iframe.contentWindow ||
                    iframe.contentDocument.parentWindow;
    if (iframeWin.document.body) {
      iframe.height = iframeWin.document.documentElement.scrollHeight ||
                      iframeWin.document.body.scrollHeight;
    }
  }
};

function animateIntro() {
  $('html').addClass('cover-hoodie');
  $('#banner').addClass('intro');
  $('#main').hide();
  $('footer').hide();

  window.setTimeout(function() {
    $('html').animate('back-change', 5000,
      function() {
        $('html').removeClass('cover-hoodie')
        $('footer').fadeIn(5000);
        $('#main').fadeIn(6000);
      });
    $('#banner').fadeOut(2000,
      function() {
        $(this).removeClass('intro');
        $(this).fadeIn(2000);
      });
  }, 5000);
} // animateIntro()

Zepto(function($) {
  window.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) { toggleFullScreen(); }
  }, false);

  //var bodyClasses = document.body.classList;
  var $html = $(document.body).parent()

  // Get all the background images in the cache
  var bg = new Image();
  bg.src = 'hoodie.png';
  bg.src = 'army_of_one.png';
  bg.src = 'tattoo_parlor.png';

  //$('#main').hide();
  //$('#cops').click(function(e) {
  //  e.preventDefault();
  //  $('#main').hide();
  //  $('#present').attr('src', 'ali.html');
  //  //setIframeHeight(document.getElementById('present'));
  //});

  $('#cops').mouseover(function() { $html.addClass   ('cover-cops'); });
  $('#cops').mouseout (function() { $html.removeClass('cover-cops'); });

  $('#fat').mouseover(function() { $html.addClass   ('cover-fat'); });
  $('#fat').mouseout (function() { $html.removeClass('cover-fat'); });

  $('#ink').mouseover(function() { $html.addClass   ('cover-ink'); });
  $('#ink').mouseout (function() { $html.removeClass('cover-ink'); });

  $('#logoff').mouseover(function() { $html.addClass   ('cover-logoff'); });
  $('#logoff').mouseout (function() { $html.removeClass('cover-logoff'); });

  $('#vets').mouseover(function() { $html.addClass   ('cover-vets'); });
  $('#vets').mouseout (function() { $html.removeClass('cover-vets'); });

});
