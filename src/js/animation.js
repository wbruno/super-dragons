var $playerMe = document.getElementById('player-me');

$playerMe.delegate('click', '.card-img', onImgClick);
$playerMe.delegate('click', '.card-back', onImgClick);

function onImgClick($this, event) {
  event.stopPropagation();
  var $parent = $this.parents(/flip-container/);

  $parent.classList.toggle('hover');
}

