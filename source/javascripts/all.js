//= require "jquery/dist/jquery"
//= require "jquery.smoothState"
//= require "jquery.unveil"
//= require "twentytwenty/js/jquery.twentytwenty"
//= require "twentytwenty/js/jquery.event.move"

$(document).ready(function(){
  $("img").unveil(200);
  $("#main").smoothState();
});
