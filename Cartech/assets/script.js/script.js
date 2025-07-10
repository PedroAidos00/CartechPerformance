document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.btn[href="#servicos"]');
  const target = document.getElementById('servicos');
  if (btn && target) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
