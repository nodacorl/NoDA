document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.getElementById('viewpoint-tabs');
  var video = document.getElementById('viewpoint-video');
  var caption = document.getElementById('viewpoint-caption');
  if (!tabs || !video) return;

  tabs.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-video]');
    if (!btn) return;

    tabs.querySelectorAll('button').forEach(function (b) {
      b.classList.remove('is-active');
    });
    btn.classList.add('is-active');

    var name = btn.getAttribute('data-video');
    video.src = './static/videos/' + name + '.mp4';
    video.play().catch(function () { /* autoplay may be blocked; controls remain */ });

    if (caption) caption.textContent = btn.getAttribute('data-label');
  });
});
