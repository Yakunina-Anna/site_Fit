$(window).scroll(function() {
    if ($(document).scrollTop() > 900) { //прокручиваем страницу вниз на 100px
      $('.up').css('opacity', '1'); //получаем событие
    } else { //если меньше чем на 100px
      $('.up').css('opacity', '0'); //возвращаем
    }
  });

  let el = document.querySelector(".form__item-input");
let icon = document.querySelector(".del");
el.addEventListener('input', (e) => {
    if(el.value.length === 0 && icon.classList.contains('vis')) {
        icon.classList.remove('vis')
    }
    else{
        icon.classList.add('vis')
    }
})
icon.addEventListener('click', () => {
    el.value = ""
    icon.classList.remove('vis')
})