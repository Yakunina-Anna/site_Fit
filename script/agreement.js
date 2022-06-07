"use strict";
document.addEventListener('DOMContentLoaded', function(){
    const formDown= document.getElementById('form-down');
    formDown.addEventListener('submit',formSend);

    async function formSend(e){
        e.preventDefault();

       let error = formValidate(formDown);

       let formData = new FormData(formDown); //вытягиваем все даднные из формы
       if (error===0){
        formDown.classList.add('_sending');
        let response = await fetch('sendmail.php',{
            method: 'POST',
            body:formData
        });
        if(response.ok){
            let result= await response.json();
            alert(result.message);
            formPreview.innerHTML='';
            formDown.classList.remove('_sending');
            formDown.reset();
        } else{
            formDown.classList.remove('_sending');
            alert("Ошибка")
        }
       } else {
        alert("Ошибка")
       }
    }

    function formValidate(formDown){
        let error=0;
        let formReq =document.querySelectorAll('._req');

        for(let index=0;index<formReq.length;index++){
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_phone')){
                if (phoneTest(input)){
                    formAddError(input);
                    error++;
                }
            }
            else if (input.classList.contains('_name')){
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
        // input.parentElement.classList.add('_error');
        // input.classList.add('_error');
    }

    function formRemoveError(input){
        input.style.borderColor = "";
        let err = input.nextElementSibling;
        err.classList.remove('errEnabled');
        err.classList.add('errDisabled');
    }
    






    //    if(error===0){
    //     formDown.classList.add('_sending')
    //     let response = await fetch('sendmail.php',{
    //         method: 'POST',
    //         body:formData
    //     });
    //      if (response.ok){
    //         let result= await response.json();
    //         alert(result.message);
    //         // formPreview.innerHTML= '';
            
    //         form.classList.remove('_sending');
    //         form.reset();

    //      }else{
            
    //         form.classList.remove('_sending');

    //      }
    //    }
    //    else{
    //         alert('please,dont panic');
    //    }
      

    //    function formValidate(formDown){
    //         let error=0;
    //         let formReq= document.querySelectorAll('._req');
            
    //         for (let index=0; index <formReq.length;index++){
    //             const input = formReq[index];
    //              formRemoveError(input);
                
    //                 if (input.classList.contains('_name')){

    //                     if (!input.value || nameTest(input)){
    //                         formAddError(input);
    //                         error++;

    //                     }
    //                     else{
    //                         formRemoveErrorText(input);
    //                     }
    //                 } else if (input.classList.contains('_phone')){
    //                     if (phoneTest(input)){
    //                         formAddError(input);
    //                         error++;
    
    //                     }
    //                     else{
    //                         formRemoveErrorText(input);
    //                     }
    //                 }
    //                 else{
    //                         if(input.value===''){
    //                             formAddError(input);
    //                             error++;
    //                         }
    //                     }


               
    //         }
            
    //         return error;

    //    } 
    //    function formAddError(input){
    //         input.style.borderColor = "#EB5757";
    //         let err = input.nextElementSibling;
    //         err.classList.add('errEnabled')
    //         err.classList.remove('errDisabled')
    //    }
   
    //    function formRemoveError(input) {
    //         input.style.borderColor = "";
    //         let err = input.nextElementSibling;
       
    //    }

    //    function formRemoveErrorText(input) {
    //         input.style.borderColor = "";
    //         let err = input.nextElementSibling;
    //         err.classList.remove('errEnabled');
    //         err.classList.add('errDisabled');
    //    }

    


    //    function emailTest(input){
    //        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    //    }
    function nameTest(input){
        return !/^[а-яёa-z]+$/iu.test(input.value);
    }
    function phoneTest(input){
        return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
    }
    
    // }

})