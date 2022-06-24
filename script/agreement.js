"use strict";
document.addEventListener('DOMContentLoaded', function(){
    const form= document.getElementById('form-down');
    form.addEventListener('submit',formSend);

    async function formSend(e){
       
        e.preventDefault();

       let error = formValidate(form);
       let formData = new FormData(form); //вытягиваем все даднные из формы
      
       if(error===0){
        var request = new XMLHttpRequest();
   
        console.log('ok')

        request.open("POST", form.action);
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200)
                document.getElementById("form-popup").classList.add('open-form');
                document.body.classList.add('fixed');
                console.log(request.responseText);
                form.reset();
        }
        request.send(formData);

       }
   
        else {
        alert("заполните все поля")
       }
    }

    function formValidate(form){
        let error=0;
        let formReq =document.querySelectorAll('._req');

        for(let index=0;index<formReq.length;index++){
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_phone')){
                if (phoneTest(input)){
                    formAddError(input);
                    error++;
                }else {
                    return error;
                }
               
            }
             if (input.classList.contains('_name')){
                if (nameTest(input)){
                    formAddError(input);
                    error++;
                }
                
            }
            else{
                if (input.value===''){
                    formAddError(input);
                    error++;
                }
            }
        }
    }
    function formAddError(input){
        input.style.borderColor = "#EB5757";
        let err = input.nextElementSibling;
        err.classList.add('errEnabled')
        err.classList.remove('errDisabled')
    }

    function formRemoveError(input){
        input.style.borderColor = "";
        let err = input.nextElementSibling;
        err.classList.remove('errEnabled');
        err.classList.add('errDisabled');
    }
    
    function nameTest(input){
        return !/^[а-яёa-z]+$/iu.test(input.value);
    }
    function phoneTest(input){
        return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
    }
    
})