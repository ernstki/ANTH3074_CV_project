;(function($) {
  // Add inner and outer width to zepto (adapted from
  // https://gist.github.com/alanhogan/3935463)
  var ioDim = function(dimension, includeBorder) {
    return function (includeMargin) {
      var sides, size, elem;
      if (this) {
        elem = this;
        size = elem[dimension]();
        sides = {
          width: ["left", "right"],
          height: ["top", "bottom"]
        };
        sides[dimension].forEach(function(side) {
          size += parseInt(elem.css("padding-" + side), 10);
          if (includeBorder) {
            size += parseInt(elem.css("border-" + side + "-width"), 10);
          }
          if (includeMargin) {
            size += parseInt(elem.css("margin-" + side), 10);
          }
        });
        return size;
      } else {
        return null;
      }
    }
  };
  ["width", "height"].forEach(function(dimension) {
    var Dimension = dimension.substr(0,1).toUpperCase() + dimension.substr(1);
    $.fn["inner" + Dimension] = ioDim(dimension, false);
    $.fn["outer" + Dimension] = ioDim(dimension, true);
  });

  $.extend($.fn, {
    center: function () {
      this.css("position","absolute");
      this.css("top", Math.max(0,
            (($(window).height() - $(this).outerHeight()) / 2)
            + $(window).scrollTop()) + "px");
      this.css("left", Math.max(0,
            (($(window).width() - $(this).outerWidth()) / 2)
            + $(window).scrollLeft()) + "px");
      return this;
    }, // $.fn.Center

    removeAllClassesBut: function(list, except) {
      for (var i = 0; i < list.length; i++) {
        if (list[i] === except) { continue; }
        this.removeClass(list[i]);
      }
    } // $.fn.removeAllClassesBut()
  })
})(Zepto)

// Source: http://www.456bereastreet.com/archive/201112/how_to_adjust_an_iframe_elements_height_to_fit_its_content/
function setIframeGeom(iframe) {
  //$('#embed').height($('body').height() - $('footer').height());
  //$('#embed').css('margin-left', 0.5*($('body').width()
  //    - $('#embed')[0].contentWindow.document.documentElement.scrollWidth));
  if (iframe) {
    var iframeWin = iframe.contentWindow ||
                    iframe.contentDocument.parentWindow;
    if (iframeWin.document.body) {
      iframe.height = iframeWin.document.documentElement.scrollHeight ||
                      iframeWin.document.body.scrollHeight;
      iframe.width  = iframeWin.document.documentElement.scrollWidth ||
                      iframeWin.document.body.scrollWidth;
    }
  }
} // setIframeGeom()


function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

//preload([
//    'img/imageName.jpg',
//    'img/anotherOne.jpg',
//    'img/blahblahblah.jpg'
//]);

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


