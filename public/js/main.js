AOS.init({
    duration: 1200,
  })

var button = document.getElementById('toggle-button');
button.addEventListener('click', function() {
    var el = document.getElementById('video-bg');
    el.style.display = (el.style.display != 'none' ? 'none' : 'block' );
});




$('.button').first().addClass('show');

$('.button').click(function(){
  var $this = $(this);
  $siblings = $this.parent().children(),
  position = $siblings.index($this);

  $('.content div').removeClass('show').eq(position).addClass('show');

  $siblings.removeClass('show');
  $this.addClass('show');
})


$('.button').first().addClass('show');

$('.button').mouseover(function(){
  var $this = $(this);
  $siblings = $this.parent().children(),
  position = $siblings.index($this);

  $('.content div').removeClass('show').eq(position).addClass('show');

  $siblings.removeClass('show');
  $this.addClass('show');
})

