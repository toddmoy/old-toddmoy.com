//= require "jquery/dist/jquery.min"
//= require "unveil/jquery.unveil.min"
//= require "jquery-visible/jquery.visible.min"
// require "twentytwenty/js/jquery.twentytwenty"
// require "twentytwenty/js/jquery.event.move"
// require "smoothstate/jquery.smoothState.min"

$(document).ready(function(){
  $('img').unveil(200);
  // $('#main').smoothState();
});

$(window).scroll(function(event) {
  $(".case-story__chapter").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
});
