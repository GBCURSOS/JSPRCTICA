
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    console.log('currentT',e.currentTarget);
    e.currentTarget.style.color = 'green';
    console.log('target', e.target);
    e.target.style.color = 'green';
  });
});
