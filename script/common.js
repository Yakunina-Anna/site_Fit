
//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	
	
	$(document).ready(function(){
		$("form").submit(function (e) { //Change
			var validName=false;
			e.preventDefault();
			var name=$("#name").val();
			if (name=''){
				console.log('error');
			}else{
				var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function () {
				th.find(".success").addClass("active");
				setTimeout(function () {
					// Done Functions
					th.find(".success").removeClass("active");
					th.trigger("reset");
					$.magnificPopup.close();
				}, 3000);
			});
			return false;
			}
			
		});
	})	
	// $("form").submit(function () { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function () {
	// 		th.find(".success").addClass("active");
	// 		setTimeout(function () {
	// 			// Done Functions
	// 			th.find(".success").removeClass("active");
	// 			th.trigger("reset");
	// 			$.magnificPopup.close();
	// 		}, 3000);
	// 	});
	// 	return false;
	// });


// Маска ввода номера телефона (плагин maskedinput)
	$('[name="phone"]').mask("+7(999) 999-9999");

// $(document).ready(function(){
//     var validName=false;
//     var validPhone=false;

//     $("form").submit(function (event) { 
//         event.preventDefault();
//         var name=$("#name").val();
//         var phone=$("#phone").val();

//         if (name==''){
//             $('#name').addClass('has-error');
//             // $('#name').nextElementSibling.addClass('errEnabled');
//             // $('#name').nextElementSibling.removeClass('errEnabled');
//         } else{
//             validName=true;
//         }
//         if (phone==''){

//         } else{
//             validPhone=true;
//         }

//         if(validName==true && validPhone==true){
//             $("form").unbind('submit').submit();
//         }


//         //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function () {
// 			th.find(".success").addClass("active");
// 			setTimeout(function () {
// 				// Done Functions
// 				th.find(".success").removeClass("active");
// 				th.trigger("reset");
// 				$.magnificPopup.close();
// 			}, 3000);
// 		});
// 		return false;
// 	});
// })





    