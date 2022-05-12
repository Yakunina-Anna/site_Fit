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





// document.addEventListener("DOMContentLoaded", function() {
//   const limit = 2;
//   const nextOpen = (wrapper, button) => {
//     const boxs = wrapper.querySelectorAll(".blogs__content-item"),
//       len = boxs.length - 2,
//       endBox = wrapper.querySelector(".nextstop"),
//       index = [...boxs].indexOf(endBox) + limit;
//     if (endBox) endBox.classList.remove("nextstop");
//     if (index < len) boxs[index].classList.add("nextstop");
//     else button.remove()
//   }
//   document.querySelectorAll(".blogs__content").forEach(wrapper => {
//     const button = wrapper.nextElementSibling;
//     button.addEventListener("click", nextOpen.bind(null, wrapper, button));
//     nextOpen(wrapper, button);
//   })
// });

$(document).ready(function() {
  var list = $(".blogs__content .blogs__content-item");
  var numToShow = 2; //сколько показывать элементов
  var buttonOpen = $("#blogOpen");
  var buttonClose = $("#blogClose");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    buttonOpen.show();
    buttonClose.hide();
  }
  list.slice(0, numToShow).show();
  buttonOpen.click(function() {
    var showing = list.filter(':visible').length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    var nowShowing = list.filter(':visible').length;
    if (nowShowing >= numInList) {
      buttonOpen.hide();
      buttonClose.show();
    }
  });
  buttonClose.click(function() {
    var showing = list.filter(':visible').length;
    list.slice(2,showing).hide();
    // list.slice(showing + 1, showing - numToShow).fadeOut();
    var nowHiding = list.filter(':hidden').length;
    this.focus= $('#blog-content');
    if (nowHiding < numInList) {
      buttonOpen.show();
      buttonClose.hide();
    }
  });
});