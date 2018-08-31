$(function(){
    
   $('a[href^="#"]').on('click', function(e){
       // obiekt jQuery
       var target = $( $(this).attr('href') );
       // console.log(target.length);
       if(target.length) {
           e.preventDefault();
           console.log(target.offset().top);
           $('html').animate({
               scrollTop: target.offset().top
           }, 1000);
        }

   }); 

});