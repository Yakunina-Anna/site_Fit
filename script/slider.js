$(document).ready(function(){
    $('.reviews__wrapper').slick({
        arrows:true, //стрелки есть
        // fade:true, //при этома варианте слайд будто исчезает и встает другой
        dots:false, //выключены точки
        adaptiveHeight:false, // автоматическая адаптивная высота слайдера
        slidesToShow:1, //количество отображаемых сладов за раз
        slidesToScroll:1, // количество пролистываемых слайдов
        speed:1000, //скорость пролистывания слайда
        // easing:'liner' ,//тип анимаци при смене слайда
        infinite: false,// будет ли слайдер бесконечен
        initialSlide:0, //стартует с начального слайда
        autoplay:false, //отключение автоматичесго проигрывания
        //autoplaySpeed:500 //скорость автопроигрывания
        draggable: true, //скрол пальцем на ПК
        swipe:true, // отключение или включение свайпа на мобилке и тачпадах
        touchMove:true, // включает все возможности скрина
        waitForAnimate:true, // насколько быстро кликать на столько быстро перелистыва
        // centerMode:true, //активный слад становится по центру
        variableWidth:false,
        // rows:1 //ряды в слайдере
        //slidesPerRow:1 //количество слайдов в ряду
        //vertical:true // вертикальный слайдер
        //verticalSwiping:true // вертикальный свайп
        appendArrows:$('.reviews__button'),
    });


    $('.reviews__down-slider').slick({
        arrows:false,
        dots:false,
        adaptiveHeight:false, 
        slidesToShow:1, 
         speed: 500,
        centerMode: true,
        variableWidth: true
        
        
    });
    $('.education__certificate').slick({
        initialSlide:0,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        appendArrows:$('.education__button'),
        // arrows:false,
        // dots:false,
        // adaptiveHeight:false, 
        // // centerMode: true,
        // slidesToShow:1, 
        // slidesToScroll:1, 
        // speed:700,   
        // // rows:2      
        // // infinite: false,
        
        
    });



    // $('.about__sliders').slick({
    //     arrows:false,
    //     dots:false,
    //     adaptiveHeight:false, 
    //     slidesToShow:4, 
    //     slidesToScroll:3, 
    //     speed:700,         
    //     infinite: false,
        
        
    // });

})


