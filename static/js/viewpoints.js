document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.video-switcher').forEach(function (root) {
    var tabs = root.querySelector('.video-tabs');
    var video = root.querySelector('video');
    var caption = root.querySelector('.switcher-caption');
    var dir = root.getAttribute('data-dir') || './static/videos';
    if (!tabs || !video) return;

    tabs.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-video]');
      if (!btn) return;

      tabs.querySelectorAll('button').forEach(function (b) {
        b.classList.remove('is-active');
      });
      btn.classList.add('is-active');

      video.src = dir + '/' + btn.getAttribute('data-video') + '.mp4';
      video.play().catch(function () { /* autoplay may be blocked; controls remain */ });

      if (caption) caption.textContent = btn.getAttribute('data-label');
    });
  });
});
