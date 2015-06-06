(function(window, document, undefined) {
  'use strict';

  /**
   * privates
   */
  var _flip = function($element) {
    var $parent = $element.parents(/flip-container/);
    $parent.classList.toggle('hover');
  };
  var _onImgClick = function(event) {
    event.stopPropagation();
    _flip(this);
  };

  var DragonAnimate = {
    events: function($element) {
      $element.delegate('click', '.card-img', _onImgClick);
      $element.delegate('click', '.card-back', _onImgClick);
    },
    flip: function($element) {
      _flip($element);
    }
  };

  window.DragonAnimate = DragonAnimate;
}(window, document));
