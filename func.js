$(function () {
    $('a.nav-link').click(function(){
        if ($("a.nav-link").hasClass('selected')) {
                $("a.nav-link").removeClass('selected');
                $(this).addClass('selected');
            } 
            else
           {
               $(this).addClass('selected');
            }
    })
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });