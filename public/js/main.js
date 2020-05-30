AOS.init({
    duration: 1200,
  })

var button = document.getElementById('toggle-button');
button.addEventListener('click', function() {
    var el = document.getElementById('video-bg');
    el.style.display = (el.style.display != 'none' ? 'none' : 'block' );
});


var ident = document.getElementById("div1")
var button = document.getElementById('toggle-button');
button.addEventListener('click', function() {
    var info = document.getElementById('info')
    info.classList.toggle("active")
  })
