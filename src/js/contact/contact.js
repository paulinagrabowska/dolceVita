$(function(){
    $('form').on('submit', function(e){

        e.preventDefault();
        const mail = $('#mail').val();
        const subject = $('#subject').val();
        const message = $('#message').val();
        const captchaG = grecaptcha.getResponse();

        $.ajax({
            type: $('form').attr('method'),
            url: $('form').attr('action'),
            dataType: 'json',
            data: {
                mail: mail,
                subject: subject,
                message: message,
                captchaG: captchaG
            },
            success: function(response) {
                const lab1 = $('label:eq(0)');
                const lab2 = $('label:eq(1)');
                const lab3 = $('label:eq(2)');
                const lab4 =  $('label:eq(3)');

                const result = $('#result');

                lab1.css('color', 'inherit').html('');
                lab2.css('color', 'inherit').html('');
                lab3.css('color', 'inherit').html('');
                lab4.css('color', 'inherit').html('');


                 console.log(response);
                if('success' in response) {
                    result.fadeOut(0);
                    result.html('Dziękujemy! Twoja wiadomość zostałą wysłana');// result.html(response.success);
                    result.fadeIn(1000).delay(4000).fadeOut(1000);
                    $('#mail').val('');
                    $('#subject').val('');
                    $('#message').val('');
                } else {
                    result.html(' ');
                    if('mail' in response) {
                        lab1.fadeOut(0);
                        lab1.css('color', 'red').html(response.mail);
                        lab1.fadeIn(1000);
                    }
                    if('subject' in response) {
                        lab2.fadeOut(0);
                        lab2.css('color', 'red').html(response.subject);
                        lab2.fadeIn(1000);
                    }
                    if('content' in response) {
                        lab3.fadeOut(0);
                        lab3.css('color', 'red').html(response.content);
                        lab3.fadeIn(1000);
                    }
                    if('captcha' in response) {
                        lab4.fadeOut(0);
                        lab4.css('color', 'red').html(response.captcha);
                        lab4.fadeIn(1000);
                    }
                }
            },
            error: function(xhr) {
                console.log(xhr);
            }
        });
    });
});