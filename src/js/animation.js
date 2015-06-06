var $cardImgs = document.querySelectorAll('.card-img');
var $backs = document.querySelectorAll('.card-back');

$cardImgs = [].slice.call($cardImgs);
$backs = [].slice.call($backs);

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
