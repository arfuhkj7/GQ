(function () {
  function fit() {
    var deck = document.querySelector('.deck');
    if (!deck) return;
    var width = window.innerWidth, height = window.innerHeight;
    var scale = Math.min(width / 1440, height / 810);
    deck.style.transform = 'scale(' + scale + ')';
    deck.style.left = ((width - 1440 * scale) / 2) + 'px';
    deck.style.top = ((height - 810 * scale) / 2) + 'px';
  }
  fit();
  window.addEventListener('resize', fit);
})();
