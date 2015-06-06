const SOCKET_SERVER = "http://localhost:8080";
// const SOCKET_SERVER = "https://dragons-api.herokuapp.com/";
var socket = io.connect(SOCKET_SERVER);

socket.on('turn', function(msg){
  console.log(msg);

  var json = JSON.parse(msg);
  console.log(json);
});

var $cardInfoItems = document.querySelectorAll('.card-info-item');


$cardInfoItems = [].slice.call($cardInfoItems);


$cardInfoItems.forEach(function($item) {
  $item.addEventListener('click', onItemClick);
});

function onItemClick(event) {
  var value = this.getAttribute('data-info');

  socket.emit('turn', value);
}
