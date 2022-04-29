const openBlock =()=>{
    document.getElementById('block').style.display = 'block';
    document.getElementById('workoutClose').style.display = 'block';
    document.getElementById('workoutOpen').style.display = 'none';

    
}

const closeBlock = () => {
    document.getElementById('block').style.display = 'none';
    document.getElementById('workoutClose').style.display = 'none';
    document.getElementById('workoutOpen').style.display = 'block';
}


// (function () {

//     let init = function () {
        
//         let button = document.getElementsByClassName('workout__button');
//         button.addEventListener('click',openVideo, false);

//         // Вешаем на все выбранные элементы событие
//         // for (let i = 0, elemLength = element.length; i < elemLength; i++) {
//         //     element[i].addEventListener('click', toggleSlide, false);
//         // }
//     };

//     let openVideo = function () {
//         let element = document.getElementsByClassName('workout__hide');
        
//         element.classList.toggle('active');
//     };

//     init();

// })();