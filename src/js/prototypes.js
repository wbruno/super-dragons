Element.prototype.is = function(elementSelector) {
  switch(elementSelector[0]) {
    case ".":
      var er = new RegExp(elementSelector.replace(".", ""));
      return this.className.match(er);
      break;
    case "#":
      return this.getAttribute("id") === elementSelector.replace("#", "");
      break;
    default:
      return this.tagName === elementSelector.toUpperCase();
      break;
  }
};
Element.prototype.delegate = function(eventName, elementSelector, cb) {
  var $this = this;

  $this.addEventListener(eventName, function (evt) {
    var $this = evt.target;

    if ($this.is(elementSelector)) {
      cb.call($this, evt);
    }
    if ($this.parentNode.is(elementSelector)) {
      cb.call($this.parentNode, evt);
    }
  });
};
Element.prototype.parents = function(parentSelector) {
  var $this = this;
  var $parent = $this;

  while(!parentSelector.test($parent.className) && $parent.tagName !== 'HTML') {
    $parent = $parent.parentNode;
  }
  return $parent;
};
