$(document).ready(function(){
  // Add corners to specified elements //
  $('.corners').append('<span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>');
  $('.card-flipper').on('click', function(){this.classList.toggle('flipped')});
});
