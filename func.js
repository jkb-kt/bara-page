$(function () {
    $('a.nav-link').click(function(){
        if ($("a.nav-link").hasClass('selected')) {
                $("a.nav-link").removeClass('selected');
                $(this).addClass('selected');
                //Insert logic if you want a type of optional click/off click code
            } 
            else
           {
               $(this).addClass('selected');
                //Insert event handling logic
            }
    })
});