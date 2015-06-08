(function(window, document, undefined) {
  'use strict';

  var $playerMe       = document.getElementById('player-me'),
      $playerOpponent = document.getElementById('player-opponent');

  const SOCKET_SERVER = "http://localhost:8080";
  // const SOCKET_SERVER = "https://dragons-api.herokuapp.com/";

  var firstCard = {
    number: 'A2',
    name: 'Dragão Azul',
    infos: [
      { name: 'Força', value: 11 },
      { name: 'Resistência', value: 3 },
      { name: 'Mana', value: 30 },
      { name: 'Fire', value: 3000 }
    ]
  };

  DragonRender.init($playerMe, $playerOpponent, firstCard);
  DragonAnimate.events($playerMe);

  DragonGame.init();
  DragonGame.socket(SOCKET_SERVER);
  DragonGame.events($playerMe);

}(window, document));
