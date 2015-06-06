(function(window, document, undefined) {
  'use strict';

  /**
   * privates
   */
  var _render = function($element, tpl, card) {
    $element.innerHTML = swig.run(tpl, card);
  }

  var DragonRender = {
    init: function($me, $opponent, firstCard) {
      DragonRender.renderMe($me, firstCard);
      DragonRender.renderOpponent($opponent, {})
    },

    renderMe: function($element, card) {
      _render($element, cardFunction, card);
    },

    renderOpponent: function($element, card) {
      _render($element, cardFlippedFunction, card);
    }
  };

  window.DragonRender = DragonRender;
}(window, document));
