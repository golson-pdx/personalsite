
 var elem = $(".fa-terminal");
 var interval = setInterval(function() {
     if (elem.css('visibility') == 'hidden') {
         elem.css('visibility', 'visible');
     } else {
         elem.css('visibility', 'hidden');
     }    
 }, 500);

$(document).ready(function () {


        setTimeout(function (){
            $(".loading-spinner").fadeOut();
            $(".navbar-nav .nav-item").css("opacity", "1");
            $(".main-content").css("opacity", "1");
          }, 1000);

        setTimeout(function (){
          clearInterval(interval); 
            elem.css('visibility', 'visible');
        }, 2000);


});