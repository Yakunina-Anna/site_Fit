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