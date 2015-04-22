function animateIntro() {
  $('#banner').addClass('intro');
  $('#main').hide();
  $('#footer').hide();

  window.setTimeout(function() {
    $('html').animate('back-change', 5000,
      function() {
        $('html').removeClass('cover-hoodie')
        $('#footer').fadeIn(5000);
        $('#main').fadeIn(6000);
      });
    $('#banner').fadeOut(2000,
      function() {
        $(this).removeClass('intro');
        $(this).fadeIn(2000);
      });
  }, 5000);
} // animateIntro()

function loadEmbed(url) {
  $('#embed').attr('src', url);
  $('#links').hide();
  $('#banner').fadeOut(800, function() {
    $('#embed').fadeIn();
    setIframeGeom($('embed')[0]);
  });
}

function setCoverClass($el, list, cls) {
  $el.addClass(cls);
  $el.removeAllClassesBut(list, cls);
}

function beginPresentation() {
  $('#embed').hide();
  $('#banner').hide();
  $('#links').hide();
  $('#footer').hide();

  window.setTimeout(function() {
    $('#footer').fadeIn();
  }, 500);

  window.setTimeout(function() {
    $('#banner').fadeIn();
    $('#links').fadeIn();
  }, 1500);
} // beginPresentation()

Zepto(function($) {

  //var bodyClasses = document.body.classList;
  var $html = $(document.body).parent()
  var titles = [ 'cops', 'fat', 'ink', 'logoff', 'vets' ];
  var covers = [ 'cover-cops', 'cover-fat', 'cover-ink', 'cover-logoff',
                 'cover-vets' ];

  window.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) { toggleFullScreen(); }
  }, false);

  // Get all the background images in the cache.
  preload([ 'img/hoodie.png', 'img/riot_squad.png', 'img/army_of_one.png',
            'img/tattoo_parlor.png', 'img/digital_identity.png',
            'img/anything_helps.png' ]);

  beginPresentation();

  // Set event handlers
  // ------------------
  $(window).resize(function() {
    if ($('#embed').css('display') !== 'none') {
      setIframeGeom($('#embed')[0]);
    }
  });

  $('#cops').mouseover(function() {
    setCoverClass($html, covers, 'cover-cops');
  });
  //$('#cops').mouseout (function() { $html.removeClass('cover-cops'); });

  $('#cops').click (function(e) {
    e.preventDefault();
    loadEmbed('ali.html');
  })

  $('#fat').mouseover(function() {
    setCoverClass($html, covers, 'cover-fat');
  });
  //$('#fat').mouseout (function() { $html.removeClass('cover-fat'); });

  $('#ink').mouseover(function() {
    setCoverClass($html, covers, 'cover-ink');
  });
  //$('#ink').mouseout (function() { $html.removeClass('cover-ink'); });

  $('#logoff').mouseover(function() {
    setCoverClass($html, covers, 'cover-logoff');
  });
  //$('#logoff').mouseout (function() { $html.removeClass('cover-logoff'); });

  $('#vets').mouseover(function() {
    setCoverClass($html, covers, 'cover-vets');
  });
  //$('#vets').mouseout (function() { $html.removeClass('cover-vets'); });

  $('#nav-restart').click(animateIntro);
  $('#nav-top').click(beginPresentation);

});
