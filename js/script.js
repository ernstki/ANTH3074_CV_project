Zepto(function($) {

  // Variables that we'll need down below
  // ------------------------------------

  // The name of the link; whether to open in an external window (NOT an
  // iframe) and whose project it is:
  var visions = {
    cops:
      [ 'ali/', false, 'ali' ],
    fat:
      [ 'http://obeseamalgamation.tumblr.com/', false, 'andrew' ],
    ink:
      [ 'http://storiesbehindthetattoo.tumblr.com/', false, 'shelby' ],
    logoff:
      [ 'http://youarenotyourfacebook.tumblr.com/', false, 'sarah' ],
    vets:
      [ 'kevin/', true, 'kevin' ]
  };

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
    $('#banner').fadeOut(1000);
    window.setTimeout(function() {
      $('html').attr('class', '');

      $('#embed').fadeIn();
      // This was an unmitigated failure; I cheated off of Yummly's iframe
      // wrapper and found out that 'position:absolute' and height and width
      // at 100% were probably the only secrets. Frustration beyond words.
      //$('#embed').setIframeGeom();
    }, 2500);
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
  preload([ 'img/hoodie.png', 'img/riot_police.png', 'img/gov_christie.png',
            'img/tattoo_parlor.png', 'img/status_check.png',
            'img/anything_helps.png' ]);

  beginPresentation();

  // Set event handlers
  // ------------------

  window.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) { toggleFullScreen(); }
  }, false);

  $('#nav-restart').click(animateIntro);
  $('#nav-top').click(beginPresentation);
  $('#fos').click (function(e) {
    e.preventDefault();
    loadEmbed($(this).attr('href'));
  })


  // Wire up all the mouseover events for the list items and their
  // corresponding "cover images"
  
  var covers = [];
  $(Object.keys(visions)).each(function() {
    covers.push('cover-' + this);
  });

  $(Object.keys(visions)).each(function() {
    var $html = $(document.body).parent();
    var id    = '#' + this;
    var cover = 'cover-' + this;
    var url   = visions[this][0];
    var ext   = visions[this][1];
    var who   = visions[this][2];

    $(id).mouseover(function() { setCoverClass($html, covers, cover); });

    $(id).click (function(e) {
      e.preventDefault();
      if (ext) { document.location = url; }
      else     { loadEmbed(url); }
    })

    $(id).attr('title', who.capFirst() + "'s Critical Vision project");
  });

}); // Zepto(function($)
