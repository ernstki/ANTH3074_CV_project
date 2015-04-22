Zepto(function($) {

  // Variables that we'll need down below
  // ------------------------------------

  var $html = $(document.body).parent()
  var titles = [ 'cops', 'fat', 'ink', 'logoff', 'vets' ];
  var covers = [ 'cover-cops', 'cover-fat', 'cover-ink', 'cover-logoff',
                 'cover-vets' ];

  // Functions
  // ---------

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
      $('html').attr('class', '');

      $('#embed').fadeIn();
      // This was an unmitigated failure; I cheated off of Yummly's iframe
      // wrapper and found out that 'position:absolute' and height and width at
      // 100% were probably the only secrets. Frustration beyond words.
      //$('#embed').setIframeGeom();
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
    $('.init-hide').each(function() { $(this).removeClass('init-hide'); });

    // We removed the 'cover' class so we could just have a white background
    // while displaying <iframe> embeds:
    $('html').addClass('cover');

    window.setTimeout(function() {
      $('#footer').fadeIn();
    }, 500);

    window.setTimeout(function() {
      $('#banner').fadeIn();
    }, 1500);
    window.setTimeout(function() {
      $('#links').fadeIn(1500);
    }, 2000);
  } // beginPresentation()


  // Preload images and start the presentation
  // -----------------------------------------

  // Get all the background images in the cache.
  preload([ 'img/hoodie.png', 'img/riot_squad.png', 'img/army_of_one.png',
            'img/tattoo_parlor.png', 'img/digital_identity.png',
            'img/anything_helps.png' ]);

  beginPresentation();

  // Set event handlers
  // ------------------

  window.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) { toggleFullScreen(); }
  }, false);

  //$(window).resize(function() {
  //  if ($('#embed').css('display') !== 'none') {
  //    $('#embed').setIframeGeom();
  //  }
  //});

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
