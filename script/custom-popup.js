// Кастомная модальная система
class CustomPopup {
  constructor() {
    this.modals = [];
    this.init();
  }

  init() {
    // Находим все элементы с классами попапов
    const popupLinks = document.querySelectorAll('[class*="popup-"]');

    popupLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href') || link.dataset.target;
        this.open(target);
      });
    });

    // Закрытие по клику на overlay
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup-overlay')) {
        this.close(e.target);
      }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAll();
      }
    });
  }

  open(selector) {
    const modal = document.querySelector(selector);
    if (!modal) return;

    // Создаем overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    // Стили для overlay
    overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

    // Стили для модального окна
    modal.style.cssText = `
            background: white;
            padding: 20px;
            border-radius: 8px;
            max-width: 90%;
            max-height: 90%;
            overflow: auto;
            transform: scale(0.7);
            transition: transform 0.3s ease;
        `;

    // Добавляем кнопку закрытия
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #333;
        `;
    closeBtn.addEventListener('click', () => this.close(overlay));

    modal.appendChild(closeBtn);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Анимация появления
    setTimeout(() => {
      overlay.style.opacity = '1';
      modal.style.transform = 'scale(1)';
    }, 10);

    // Блокируем скролл body
    document.body.style.overflow = 'hidden';

    this.modals.push(overlay);
  }

  close(overlay) {
    overlay.style.opacity = '0';
    const modal = overlay.querySelector('.mfp-content, [id]');

    if (modal) {
      modal.style.transform = 'scale(0.7)';
    }

    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
      document.body.style.overflow = '';
    }, 300);
  }

  closeAll() {
    this.modals.forEach(overlay => this.close(overlay));
    this.modals = [];
  }
}

// Инициализация попапов
document.addEventListener('DOMContentLoaded', function () {
  new CustomPopup();
});