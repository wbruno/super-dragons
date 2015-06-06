const SOCKET_SERVER = "http://localhost:8080";
// const SOCKET_SERVER = "https://dragons-api.herokuapp.com/";
var socket = io.connect(SOCKET_SERVER);

socket.on('turn', function(msg){
  console.log('msg', msg);

  var json = JSON.parse(msg);
  console.log('json', json);
});

var $playerMe = document.getElementById('player-me');
$playerMe.delegate('click', '.card-info-item', onItemClick);


function onItemClick($this, event) {
  event.stopPropagation();
  var value = $this.getAttribute('data-info');

  socket.emit('turn', value);
}
