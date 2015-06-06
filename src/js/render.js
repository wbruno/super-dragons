(function(window, document, undefined) {
  'use strict';

  var dragao = {
    number: 'A2',
    name: 'Dragão Azul',
    infos: [
      { name: 'Força', value: 11 },
      { name: 'Resistência', value: 3 },
      { name: 'Mana', value: 30 }
    ]
  };
  var card = swig.run(cardTpl, dragao);
  var cardFlipped = swig.run(cardFlippedTpl, dragao);

  var $playerMe = document.getElementById('player-me');
  $playerMe.innerHTML += card;

  var $playerOpponent = document.getElementById('player-opponent');
  $playerOpponent.innerHTML += cardFlipped;

}(window, document));
