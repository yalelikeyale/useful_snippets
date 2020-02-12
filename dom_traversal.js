(function() {
  function findAncestor(el, cls) {
    if (!el.matches(cls)) {
      while ((el = el.parentElement) && !el.matches(cls));
    }
    return el;
  }
  var parent = findAncestor(event.target, '{INSERT PARENT ELEMENT CSS SELECTOR}');
  var dataPoint = parent.querySelector('{INSERT CSS SELECTOR OF DATA POINT}').textContent;
  if(!(dataPoint == null)){return dataPoint}
})();