(function(window, document, undefined) {
  'use strict';

  /**
   * privates
   */
  var _socket;
  var onItemClick = function(event) {
    event.stopPropagation();
    var value = this.getAttribute('data-info');

    _socket.emit('turn', value);
  };

  var DragonGame = {
    init: function(socketServer) {
      _socket = io.connect(socketServer);

      _socket.on('turn', function(msg){
        console.log('msg', msg);

        var json = JSON.parse(msg);
        console.log('json', json);
      });
    },
    events: function($me) {
      $me.delegate('click', '.card-info-item', onItemClick);
    }
  };

  window.DragonGame = DragonGame;
}(window, document));
