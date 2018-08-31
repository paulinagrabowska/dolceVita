$(function(){
    const pageHeight = $(window).height() / 2;
    // console.log(pageHeight);
    $(window).on('scroll', function(){
        var YOffset = $(window).scrollTop();
        // console.log(YOffset);
        if(YOffset > pageHeight) {
            $('#to_top').fadeIn(1000);
        } else {
            $('#to_top').fadeOut(1000);
        }
    });
});