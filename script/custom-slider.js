// Кастомный слайдер для отзывов без автоплея
class ReviewsSlider {
    constructor() {
        this.container = document.querySelector('.reviews__wrapper');
        if (!this.container) return;
        
        this.slides = Array.from(this.container.querySelectorAll('.reviews__item'));
        this.currentIndex = 0;
        this.isAnimating = false;
        
        this.init();
    }
    
    init() {
        if (this.slides.length <= 1) return;
        
        this.createNavigation();
        this.createPagination();
        this.showSlide(this.currentIndex);
        
        // Добавляем обработчики для тач-событий (опционально)
        this.addTouchEvents();
    }
    
    createNavigation() {
        // Находим существующий пустой div для кнопок
        const buttonContainer = document.querySelector('.reviews__button');
        if (!buttonContainer) return;
        
        // Очищаем контейнер от старых кнопок (если есть)
        buttonContainer.innerHTML = '';
        
        // Создаем кнопки навигации с уникальными классами
        this.prevBtn = document.createElement('button');
        this.nextBtn = document.createElement('button');
        
        this.prevBtn.innerHTML = '‹';
        this.nextBtn.innerHTML = '›';
        this.prevBtn.setAttribute('aria-label', 'Предыдущий отзыв');
        this.nextBtn.setAttribute('aria-label', 'Следующий отзыв');
        
        // Используем уникальные классы чтобы избежать конфликтов
        this.prevBtn.className = 'custom-slider-prev';
        this.nextBtn.className = 'custom-slider-next';
        
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Добавляем кнопки в существующий контейнер
        buttonContainer.appendChild(this.prevBtn);
        buttonContainer.appendChild(this.nextBtn);
        
        // Добавляем стили для позиционирования кнопок
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'center';
        buttonContainer.style.gap = '20px';
        buttonContainer.style.marginTop = '40px';
        buttonContainer.style.marginBottom = '72px';
    }
    
    createPagination() {
        // Создаем пагинацию (точки) с уникальными классами
        this.pagination = document.createElement('div');
        this.pagination.className = 'custom-slider-pagination';
        
        for (let i = 0; i < this.slides.length; i++) {
            const dot = document.createElement('button');
            dot.className = 'custom-slider-dot';
            dot.setAttribute('aria-label', `Перейти к отзыву ${i + 1}`);
            dot.addEventListener('click', () => this.goToSlide(i));
            this.pagination.appendChild(dot);
        }
        
        // Добавляем пагинацию после слайдера
        this.container.parentNode.appendChild(this.pagination);
    }
    
    showSlide(index) {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        // Скрываем все слайды
        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.style.opacity = '0';
        });
        
        // Показываем текущий слайд
        this.slides[index].style.display = 'block';
        
        // Анимация появления
        setTimeout(() => {
            this.slides[index].style.opacity = '1';
            this.isAnimating = false;
        }, 50);
        
        // Обновляем активную точку в пагинации
        this.updatePagination(index);
        
        this.currentIndex = index;
    }
    
    updatePagination(index) {
        const dots = this.pagination.querySelectorAll('.custom-slider-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    next() {
        const nextIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }
    
    prev() {
        const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
    }
    
    goToSlide(index) {
        this.showSlide(index);
    }
    
    addTouchEvents() {
        let startX = 0;
        let endX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }
    
    handleSwipe(startX, endX) {
        const diff = startX - endX;
        const swipeThreshold = 50;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.next(); // Свайп влево
            } else {
                this.prev(); // Свайп вправо
            }
        }
    }
}

// Инициализация слайдера отзывов
document.addEventListener('DOMContentLoaded', function() {
    new ReviewsSlider();
});