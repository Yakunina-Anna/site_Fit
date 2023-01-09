
$(document).ready(function() {
    $('.burger').click(function() {
        
        $('.burger__menu').addClass('open-menu');
        $("body").addClass("fixed");
    });
    
    $('.burger__close').click(function() {
        $('.burger__menu').removeClass('open-menu');
        $("body").removeClass("fixed");
    });
    $('.burger__item-link').click(function() {
        $('.burger__menu').removeClass('open-menu');
        $("body").removeClass("fixed");
    });

   
  
});

$(document).mouseup(function (e) {
    var burger = $(".burger__wrapper");
    if (burger.has(e.target).length === 0){
		$('.burger__menu').removeClass('open-menu');
		$('body').removeClass('fixed')
    }
});
$(document).mouseup(function (e) {
    var burgerContent = $(".burger__content");
    if (burgerContent.has(e.target).length !== 0){
		$('.burger__menu').removeClass('open-menu');
		$('body').removeClass('fixed')
    }
});

