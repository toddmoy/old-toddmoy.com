//= require "jquery/dist/jquery.min"
//= require "smoothstate/jquery.smoothState.min"
//= require "unveil/jquery.unveil.min"
//= require "twentytwenty/js/jquery.twentytwenty"
//= require "twentytwenty/js/jquery.event.move"

$(document).ready(function(){
  $("img").unveil(200);
  $("#main").smoothState();
});
