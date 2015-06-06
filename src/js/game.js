const SOCKET_SERVER = "http://localhost:8080";
// const SOCKET_SERVER = "https://dragons-api.herokuapp.com/";
var socket = io.connect(SOCKET_SERVER);

socket.on('turn', function(msg){
  console.log(msg);

  var json = JSON.parse(msg);
  console.log(json);
});

var $cardInfoItems = document.querySelectorAll('.card-info-item');
var $cardImgs = document.querySelectorAll('.card-img');
var $backs = document.querySelectorAll('.card-back');

$cardInfoItems = [].slice.call($cardInfoItems);
$cardImgs = [].slice.call($cardImgs);
$backs = [].slice.call($backs);

$cardInfoItems.forEach(function($item) {
  $item.addEventListener('click', onItemClick);
});
$cardImgs.forEach(function($img) {
  $img.addEventListener('click', onImgClick);
});
$backs.forEach(function($img) {
  $img.addEventListener('click', onImgClick);
});


function onImgClick(event) {
  var $parent = parents(this, /flip-container/);

  $parent.classList.toggle('hover');
}

function parents($element, parentSelector) {
  $parent = $element;
  while(!parentSelector.test($parent.className)) {
    $parent = $parent.parentNode;
  }
  return $parent;
}
function onItemClick(event) {
  var value = this.getAttribute('data-info');

  socket.emit('turn', value);
}
