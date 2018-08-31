$(function(){
    $('form').on('submit', function(e){

        e.preventDefault();
        const mail = $('#mail').val();
        const subject = $('#subject').val();
        const message = $('#message').val();

        $.ajax({
            type: $('form').attr('method'),
            url: $('form').attr('action'),
            dataType: 'json',
            data: {
                mail: mail,
                subject: subject,
                message: message
            },
            success: function(response) {
                // console.log(response);
                if('success' in response) {
                    console.log('mail został wysłany');
                } else {
                    const lab1 = $('label:eq(0)');
                    const lab2 = $('label:eq(1)');
                    const lab3 = $('label:eq(2)');

                    if('mail' in response) {
                        lab1.css('color', 'red').html(response.mail);
                    }
                }
            },
            error: function(xhr) {
                console.log(xhr);
            }
        });
    });
});