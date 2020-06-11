(function() {
  // from: https://unpkg.com/docsify@4.9.4/lib/docsify.js
  var isMobile = document.body.clientWidth <= 600;

  var $ = document,
      body = $.body;

  function isFn(obj) {
    return typeof obj === 'function'
  }

  function on(el, type, handler) {
    isFn(type) ?
      window.addEventListener(el, type) :
      el.addEventListener(type, handler);
  }

  function btn(el) {
    var toggle = function (_) { return body.classList.toggle('close'); };

    el = $.querySelector(el);
    if (el == null) {
      return
    }
    on(el, 'click', function (e) {
      e.stopPropagation();
      toggle();
    });

    isMobile &&
      on(
        body,
        'click',
        function (_) { return body.classList.contains('close') && toggle(); }
      );
  }

  function ready(callback) {
    var state = document.readyState;

    if (state === 'complete' || state === 'interactive') {
      return setTimeout(callback, 0)
    }

    document.addEventListener('DOMContentLoaded', callback);
  }

  ready(function (_) {
    btn('button.sidebar-toggle');
  });
})();
