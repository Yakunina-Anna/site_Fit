// Кастомная кнопка "Наверх" с вашими стилями
class CustomScrollUp {
    constructor() {
        this.button = document.querySelector('.up');
        if (!this.button) return;
        
        this.init();
    }
    
    init() {
        // Обработчик клика
        this.button.addEventListener('click', (e) => {
            e.preventDefault();
            this.scrollToTop();
        });
        
        // Показ/скрытие кнопки при скролле
        window.addEventListener('scroll', () => {
            this.toggleVisibility();
        });
        
        // Инициализация видимости
        this.toggleVisibility();
    }
    
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.button.style.opacity = '1';
            this.button.style.pointerEvents = 'auto';
            this.button.style.cursor = 'pointer';
        } else {
            this.button.style.opacity = '0';
            this.button.style.pointerEvents = 'none';
        }
    }
}

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
    new CustomScrollUp();
});