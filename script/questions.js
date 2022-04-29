
(function () {

let init = function () {
  let element = document.getElementsByClassName('accordeon__heading');
    // Вешаем на все выбранные элементы событие
    for (let i = 0, elemLength = element.length; i < elemLength; i++) {
      element[i].addEventListener('click', toggleSlide, false);
    }
  };

let toggleSlide = function (e) {
  let elem = e.target;
     elem.classList.toggle('active');
};

  init();

})();