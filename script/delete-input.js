//очищение инпутов крестиком
let delForm = document.querySelectorAll(".form__del-in");

for (let i = 0, elemLength = delForm.length; i < elemLength; i++) {
    let el = delForm[i].querySelector(".form__item-input");
    let icon = delForm[i].querySelector(".del");
    el.addEventListener('input', (e) => {
        if(el.value.length === 0 && icon.classList.contains('vis')){
            icon.classList.remove('vis')
        }
        else{
            icon.classList.add('vis')
        }
    })
    icon.addEventListener('click', () => {
        el.value = ""
        icon.classList.remove('vis')
    })
   
  }

  // очищение textarea крестиком
let elt = document.querySelector(".form__item-area");
let icont = document.querySelector(".del-text");
elt.addEventListener('input', (e) => {
    if(elt.value.length <= 0 && icont.classList.contains('vis')){
        icont.classList.remove('vis')
    }
    else{
       icont.classList.add('vis')
     }
   
})

icont.addEventListener('click', () => {
          elt.value = " "
          icont.classList.remove('vis')
      })