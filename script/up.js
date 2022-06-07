$(window).scroll(function() {
    if ($(document).scrollTop() > 900) { //прокручиваем страницу вниз на 100px
      $('.up').css('opacity', '1'); //получаем событие
    } else { //если меньше чем на 100px
      $('.up').css('opacity', '0'); //возвращаем
    }
  });

 