// scripts/burger.js
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger__menu');
    const burgerClose = document.querySelector('.burger__close');
    const burgerItemLinks = document.querySelectorAll('.burger__item-link');
    const body = document.body;

    if (!burger || !burgerMenu) {
        console.error('Burger elements not found');
        return;
    }

    // Открытие бургера
    burger.addEventListener('click', function() {
        burgerMenu.classList.add('open-menu');
        body.classList.add('fixed');
    });

    // Закрытие через крестик
    if (burgerClose) {
        burgerClose.addEventListener('click', function() {
            burgerMenu.classList.remove('open-menu');
            body.classList.remove('fixed');
        });
    }

    // Закрытие при клике на пункт меню
    burgerItemLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('open-menu');
            body.classList.remove('fixed');
        });
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', function(e) {
        const burgerWrapper = document.querySelector('.burger__wrapper');
        if (burgerWrapper && !burgerWrapper.contains(e.target) &&
            burger && !burger.contains(e.target)) {
            burgerMenu.classList.remove('open-menu');
            body.classList.remove('fixed');
        }
    });

    // Закрытие при клике внутри контента меню (для мобильных)
    const burgerContent = document.querySelector('.burger__content');
    if (burgerContent) {
        burgerContent.addEventListener('click', function() {
            burgerMenu.classList.remove('open-menu');
            body.classList.remove('fixed');
        });
    }

    // Закрытие при нажатии Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && burgerMenu.classList.contains('open-menu')) {
            burgerMenu.classList.remove('open-menu');
            body.classList.remove('fixed');
        }
    });
});