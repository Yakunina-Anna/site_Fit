// Слайдер для блока с дополнительными отзывами (картинки)
class ReviewsDownSlider {
    constructor() {
        this.container = document.querySelector('.reviews__down-slider');
        if (!this.container) return;
        
        this.slides = Array.from(this.container.querySelectorAll('.reviews__down-item'));
        this.currentIndex = 0;
        this.isAnimating = false;
        this.animationDuration = 400;
        
        // Настройки для разных разрешений
        this.slidesToShow = {
            desktop: 4,
            tablet: 2,
            mobile: 1
        };
        
        this.init();
    }
    
    init() {
        if (this.slides.length <= 1) return;
        
        // Добавляем CSS для анимаций и сетки
        this.addSliderStyles();
        
        this.createNavigation();
        this.createPagination();
        this.setupSlider();
        this.updateSlider();
        
        // Обработчик ресайза
        window.addEventListener('resize', () => {
            this.updateSlider();
        });
        
        // Добавляем обработчики для тач-событий
        this.addTouchEvents();
    }
    
    addSliderStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .reviews__down-slider {
                position: relative;
                overflow: hidden;
            }
            
            .reviews-down-slider__track {
                display: flex;
                transition: transform ${this.animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1);
                will-change: transform;
            }
            
            .reviews__down-item {
                flex: 0 0 auto;
                transition: transform 0.3s ease, opacity 0.3s ease;
                padding: 5px;
                box-sizing: border-box;
            }
            
            .reviews__down-item img {
                width: 100%;
                height: auto;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                transition: transform 0.3s ease;
            }
            
            .reviews__down-item:hover img {
                transform: scale(1.02);
            }
            
            .reviews-down-arrow-prev,
            .reviews-down-arrow-next {
                background: rgba(0, 0, 0, 0.7);
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 18px;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10;
            }
            
            .reviews-down-arrow-prev:hover,
            .reviews-down-arrow-next:hover {
                background: rgba(0, 0, 0, 0.9);
                transform: translateY(-50%) scale(1.1);
            }
            
            .reviews-down-arrow-prev {
                left: 10px;
            }
            
            .reviews-down-arrow-next {
                right: 10px;
            }
            
            .reviews-down-dots {
                display: flex;
                justify-content: center;
                gap: 8px;
                margin-top: 20px;
            }
            
            .reviews-down-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: none;
                background: #e0e0e0;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .reviews-down-dot.active {
                background: #4EAA40;
                transform: scale(1.2);
            }
            
            /* Адаптивные стили */
            @media (max-width: 1243px) {
                .reviews-down-arrow-prev,
                .reviews-down-arrow-next {
                    width: 35px;
                    height: 35px;
                    font-size: 16px;
                }
            }
            
            @media (max-width: 767px) {
                .reviews-down-arrow-prev,
                .reviews-down-arrow-next {
                    width: 30px;
                    height: 30px;
                    font-size: 14px;
                }
                
                .reviews-down-arrow-prev {
                    left: 5px;
                }
                
                .reviews-down-arrow-next {
                    right: 5px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setupSlider() {
        // Создаем track для слайдов
        this.track = document.createElement('div');
        this.track.className = 'reviews-down-slider__track';
        
        // Перемещаем слайды в track
        this.slides.forEach(slide => {
            this.track.appendChild(slide);
        });
        
        // Очищаем контейнер и добавляем track
        this.container.innerHTML = '';
        this.container.appendChild(this.track);
        
        // Устанавливаем начальную позицию
        this.updateSlider();
    }
    
    getSlidesToShow() {
        const width = window.innerWidth;
        if (width <= 767) {
            return this.slidesToShow.mobile;
        } else if (width <= 1243) {
            return this.slidesToShow.tablet;
        } else {
            return this.slidesToShow.desktop;
        }
    }
    
    updateSlider() {
        const slidesToShow = this.getSlidesToShow();
        const slideWidth = 100 / slidesToShow;
        
        // Устанавливаем ширину слайдов
        this.slides.forEach(slide => {
            slide.style.width = `${slideWidth}%`;
        });
        
        // Пересчитываем максимальный индекс
        this.maxIndex = Math.max(0, this.slides.length - slidesToShow);
        
        // Корректируем текущий индекс если нужно
        if (this.currentIndex > this.maxIndex) {
            this.currentIndex = this.maxIndex;
        }
        
        this.updateTrackPosition();
        this.updateNavigation();
        this.updatePagination();
    }
    
    updateTrackPosition() {
        const slidesToShow = this.getSlidesToShow();
        const slideWidth = 100 / slidesToShow;
        const translateX = -this.currentIndex * slideWidth;
        
        this.track.style.transform = `translateX(${translateX}%)`;
    }
    
    createNavigation() {
        // Создаем кнопки навигации с уникальными классами
        this.prevBtn = document.createElement('button');
        this.nextBtn = document.createElement('button');
        
        this.prevBtn.innerHTML = '‹';
        this.nextBtn.innerHTML = '›';
        this.prevBtn.setAttribute('aria-label', 'Предыдущие отзывы');
        this.nextBtn.setAttribute('aria-label', 'Следующие отзывы');
        
        // Используем уникальные классы для этого слайдера
        this.prevBtn.className = 'reviews-down-arrow-prev';
        this.nextBtn.className = 'reviews-down-arrow-next';
        
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Добавляем кнопки в контейнер
        this.container.appendChild(this.prevBtn);
        this.container.appendChild(this.nextBtn);
    }
    
    createPagination() {
        // Создаем пагинацию с уникальным классом
        this.pagination = document.createElement('div');
        this.pagination.className = 'reviews-down-dots'; // Уникальное имя
        
        // Добавляем пагинацию после слайдера
        this.container.parentNode.appendChild(this.pagination);
        
        this.updatePagination();
    }
    
    updatePagination() {
        if (!this.pagination) return;
        
        const slidesToShow = this.getSlidesToShow();
        const totalSlides = this.slides.length;
        const totalPages = Math.ceil(totalSlides / slidesToShow);
        
        // Очищаем пагинацию
        this.pagination.innerHTML = '';
        
        // Создаем точки для каждой страницы с уникальными классами
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('button');
            dot.className = 'reviews-down-dot'; // Уникальное имя
            dot.setAttribute('aria-label', `Перейти к странице ${i + 1}`);
            dot.addEventListener('click', () => this.goToPage(i));
            
            if (i === Math.floor(this.currentIndex / slidesToShow)) {
                dot.classList.add('active');
            }
            
            this.pagination.appendChild(dot);
        }
    }
    
    updateNavigation() {
        if (!this.prevBtn || !this.nextBtn) return;
        
        // Показываем/скрываем кнопки в зависимости от позиции
        this.prevBtn.style.display = this.currentIndex === 0 ? 'none' : 'flex';
        this.nextBtn.style.display = this.currentIndex >= this.maxIndex ? 'none' : 'flex';
    }
    
    next() {
        if (this.isAnimating || this.currentIndex >= this.maxIndex) return;
        
        this.isAnimating = true;
        this.currentIndex++;
        this.updateTrackPosition();
        this.updateNavigation();
        this.updatePagination();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, this.animationDuration);
    }
    
    prev() {
        if (this.isAnimating || this.currentIndex <= 0) return;
        
        this.isAnimating = true;
        this.currentIndex--;
        this.updateTrackPosition();
        this.updateNavigation();
        this.updatePagination();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, this.animationDuration);
    }
    
    goToPage(pageIndex) {
        if (this.isAnimating) return;
        
        const slidesToShow = this.getSlidesToShow();
        const newIndex = pageIndex * slidesToShow;
        
        if (newIndex !== this.currentIndex && newIndex <= this.maxIndex) {
            this.isAnimating = true;
            this.currentIndex = newIndex;
            this.updateTrackPosition();
            this.updateNavigation();
            this.updatePagination();
            
            setTimeout(() => {
                this.isAnimating = false;
            }, this.animationDuration);
        }
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

// Инициализация слайдера дополнительных отзывов
document.addEventListener('DOMContentLoaded', function() {
    new ReviewsDownSlider();
});