// Чистый JS аккордеон
class CustomAccordeon {
  constructor(containerSelector) {
    this.items = document.querySelectorAll(`${containerSelector} .accordeon__item`);
    this.init();
  }

  init() {
    this.items.forEach(item => {
      const heading = item.querySelector('.accordeon__heading');
      const inner = item.querySelector('.accordeon__inner');

      heading.addEventListener('click', () => {
        this.toggleItem(item, inner);
      });
    });
  }

  toggleItem(item, inner) {
    const isOpen = item.classList.contains('active');

    // Закрываем все items
    this.items.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordeon__inner').style.maxHeight = null;
    });

    // Открываем текущий, если был закрыт
    if (!isOpen) {
      item.classList.add('active');
      inner.style.maxHeight = inner.scrollHeight + 'px';
    }
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function () {
  new CustomAccordeon('.accordeon__list');
});