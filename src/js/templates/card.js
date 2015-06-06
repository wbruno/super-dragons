var cardTpl = function (_swig,_ctx,_filters,_utils,_fn
/**/) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<article class=\"card flip-container\">\n  <div class=\"flipper\">\n    <section class=\"card-front front\">\n      <header class=\"card-header\">\n        <span class=\"card-number\">";
_output += _filters["e"]((((typeof _ctx.number !== "undefined" && _ctx.number !== null) ? ((typeof _ctx.number !== "undefined" && _ctx.number !== null) ? _ctx.number : "") : ((typeof number !== "undefined" && number !== null) ? number : "")) !== null ? ((typeof _ctx.number !== "undefined" && _ctx.number !== null) ? ((typeof _ctx.number !== "undefined" && _ctx.number !== null) ? _ctx.number : "") : ((typeof number !== "undefined" && number !== null) ? number : "")) : "" ));
_output += "</span>\n        <h2 class=\"card-title\">";
_output += _filters["e"]((((typeof _ctx.name !== "undefined" && _ctx.name !== null) ? ((typeof _ctx.name !== "undefined" && _ctx.name !== null) ? _ctx.name : "") : ((typeof name !== "undefined" && name !== null) ? name : "")) !== null ? ((typeof _ctx.name !== "undefined" && _ctx.name !== null) ? ((typeof _ctx.name !== "undefined" && _ctx.name !== null) ? _ctx.name : "") : ((typeof name !== "undefined" && name !== null) ? name : "")) : "" ));
_output += "</h2>\n      </header>\n\n      <img src=\"images/default.png\" class=\"card-img\">\n\n      <ul class=\"card-info\">\n      ";
(function () {
  var __l = (((typeof _ctx.infos !== "undefined" && _ctx.infos !== null) ? ((typeof _ctx.infos !== "undefined" && _ctx.infos !== null) ? _ctx.infos : "") : ((typeof infos !== "undefined" && infos !== null) ? infos : "")) !== null ? ((typeof _ctx.infos !== "undefined" && _ctx.infos !== null) ? ((typeof _ctx.infos !== "undefined" && _ctx.infos !== null) ? _ctx.infos : "") : ((typeof infos !== "undefined" && infos !== null) ? infos : "")) : "" ), __len = (_utils.isArray(__l) || typeof __l === "string") ? __l.length : _utils.keys(__l).length;
  if (!__l) { return; }
    var _ctx__loopcache014293324621394277 = { loop: _ctx.loop, info: _ctx.info, __k: _ctx.__k };
    _ctx.loop = { first: false, index: 1, index0: 0, revindex: __len, revindex0: __len - 1, length: __len, last: false };
  _utils.each(__l, function (info, __k) {
    _ctx.info = info;
    _ctx.__k = __k;
    _ctx.loop.key = __k;
    _ctx.loop.first = (_ctx.loop.index0 === 0);
    _ctx.loop.last = (_ctx.loop.revindex0 === 0);
    _output += "\n        <li class=\"card-info-item\" data-info='{ \"skill\": \"";
_output += _filters["e"]((((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.name !== undefined && _ctx.info.name !== null) ? ((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.name !== undefined && _ctx.info.name !== null) ? _ctx.info.name : "") : ((typeof info !== "undefined" && info !== null && info.name !== undefined && info.name !== null) ? info.name : "")) !== null ? ((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.name !== undefined && _ctx.info.name !== null) ? ((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.name !== undefined && _ctx.info.name !== null) ? _ctx.info.name : "") : ((typeof info !== "undefined" && info !== null && info.name !== undefined && info.name !== null) ? info.name : "")) : "" ));
_output += "\", \"value\": \"";
_output += _filters["e"]((((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.value !== undefined && _ctx.info.value !== null) ? ((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.value !== undefined && _ctx.info.value !== null) ? _ctx.info.value : "") : ((typeof info !== "undefined" && info !== null && info.value !== undefined && info.value !== null) ? info.value : "")) !== null ? ((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.value !== undefined && _ctx.info.value !== null) ? ((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.value !== undefined && _ctx.info.value !== null) ? _ctx.info.value : "") : ((typeof info !== "undefined" && info !== null && info.value !== undefined && info.value !== null) ? info.value : "")) : "" ));
_output += "\" }'>\n          ";
_output += _filters["e"]((((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.name !== undefined && _ctx.info.name !== null) ? ((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.name !== undefined && _ctx.info.name !== null) ? _ctx.info.name : "") : ((typeof info !== "undefined" && info !== null && info.name !== undefined && info.name !== null) ? info.name : "")) !== null ? ((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.name !== undefined && _ctx.info.name !== null) ? ((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.name !== undefined && _ctx.info.name !== null) ? _ctx.info.name : "") : ((typeof info !== "undefined" && info !== null && info.name !== undefined && info.name !== null) ? info.name : "")) : "" ));
_output += " <span class=\"card-info-value\">";
_output += _filters["e"]((((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.value !== undefined && _ctx.info.value !== null) ? ((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.value !== undefined && _ctx.info.value !== null) ? _ctx.info.value : "") : ((typeof info !== "undefined" && info !== null && info.value !== undefined && info.value !== null) ? info.value : "")) !== null ? ((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.value !== undefined && _ctx.info.value !== null) ? ((typeof _ctx.info !== "undefined" && _ctx.info !== null && _ctx.info.value !== undefined && _ctx.info.value !== null) ? _ctx.info.value : "") : ((typeof info !== "undefined" && info !== null && info.value !== undefined && info.value !== null) ? info.value : "")) : "" ));
_output += "</span>\n        </li>\n      ";
    _ctx.loop.index += 1; _ctx.loop.index0 += 1; _ctx.loop.revindex -= 1; _ctx.loop.revindex0 -= 1;
  });
  _ctx.loop = _ctx__loopcache014293324621394277.loop;
  _ctx.info = _ctx__loopcache014293324621394277.info;
  _ctx.__k = _ctx__loopcache014293324621394277.__k;
  _ctx__loopcache014293324621394277 = undefined;
})();
_output += "\n      </ul><!-- .card-info -->\n    </section>\n    <section class=\"card-back back\">\n    </section><!-- .card-back -->\n  </div><!-- .flipper -->\n</article><!-- .flip-container -->\n";

  return _output;

};
