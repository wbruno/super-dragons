(function(window, document, undefined) {
  'use strict';

  var $playerMe       = document.getElementById('player-me'),
      $playerOpponent = document.getElementById('player-opponent');
  /**
   * privates
   */
  var _socket;
  var emitUserChoice = function(event) {
    var value = this.getAttribute('data-info');
    _socket.emit('turn', value);
  };
  var animateBoard = function(event) {
    this.classList.add('is-active');
  };
  var turnOpponentCard = function(card) {
    DragonRender.render($playerOpponent, card);
    DragonAnimate.flip($playerOpponent.querySelector('.card'));
  };

  var DragonGame = {
    init: function() {
      DragonAnimate.flip($playerMe.querySelector('.card'));
    },
    socket: function(socketServer) {
      _socket = io.connect(socketServer);

      _socket.on('turn', function(msg){
        var json = JSON.parse(msg);
        console.log('json', json);

        var card = { name: 'teste' };
        turnOpponentCard(card);
      });
    },
    events: function($me) {
      $me.delegate('click', '.card-info-item', emitUserChoice);
      $me.delegate('click', '.card-info-item', animateBoard);
    }
  };

  window.DragonGame = DragonGame;
}(window, document));
