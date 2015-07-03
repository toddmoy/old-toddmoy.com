//= require "jquery-2.1.4.min"
//= require "jquery.pjax"

$(document).ready(function(){
  $(".case-story__wrapper img").each(function(){
    if( $(this).height() > 400 ) { 
      $(this).wrap("<div class='js-trim js-trimmed'></div>");
      $(this).bind("click", function(){
        $(this).parent().removeClass("js-trimmed");
      });
      
    }
  });

  $(".trim-toggle").bind("click", function(){
    // stuff
  });
});
