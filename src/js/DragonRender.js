(function(window, document, undefined) {
  'use strict';

  /**
   * privates
   */

  var DragonRender = {
    init: function($me, $opponent, firstCard) {
      DragonRender.render($me, firstCard);
      DragonRender.render($opponent, {})
    },

    render: function($element, card) {
      $element.innerHTML = swig.run(cardFunction, card);
    }
  };

  window.DragonRender = DragonRender;
}(window, document));
