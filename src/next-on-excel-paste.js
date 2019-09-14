(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var IMAGE_SLASH = 'image/';

  nx.onExcelPaste = function(inEvent) {
    var items = nx.get(inEvent, 'clipboardData.items');
    var _items = nx.slice(items, 0);
    var image = _items.find(function(item) {
      return item.type.indexOf(IMAGE_SLASH) > -1;
    });
    return image ? image.getAsFile() : null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.onExcelPaste;
  }
})();
