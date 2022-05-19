
$(document).ready(function() {
	$('.heading__button').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
    // mainClass: 'send-form',
    removalDelay: 300,
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		// callbacks: {
		// 	beforeOpen: function() {
		// 		if($(window).width() < 700) {
		// 			this.st.focus = false;
		// 		} else {
		// 			this.st.focus = '#name';
		// 		}
		// 	}
		// }
	});

  $(document).on('click', '#mfp__go', function (e) {
    e.preventDefault();
    
    // $.magnificPopup.close();
    $('#video-popup').magnificPopup({
      items: {
        src: '#video-popup',
        type: 'inline'
          }
   }).magnificPopup('open');
  });

$('.popup-about-diploma').magnificPopup({
	preloader: false,
	mainClass: 'about__popup',
	callbacks:{
		open(){
			
				$("#diploma").owlCarousel({
					margin:10,
					loop:true,
					autoWidth:true,
					// items:4,
					stagePadding: 20,
					responsive:{
						1240:{
							items:2
						},
						768:{
							items:1
						}
					}
					
				});
			  
			
		}
		
	}

})
$('.popup-about-certif').magnificPopup({
	preloader: false,
	// type: 'inline',
	mainClass: 'about__popup',
	callbacks:{
		open(){
			
				$("#certif").owlCarousel({
					margin:10,
					loop:true,
					autoWidth:true,
					// items:4,
					stagePadding: 20,
					responsive:{
						1240:{
							items:2
						},
						768:{
							items:1
						}
					}
					
				});
			  
			
		}
		
	}

})

		
});


// $(document).ready(function() {
// 	$('.popup-with-title').magnificPopup({
// 		type: 'inline',
		

// 		// When elemened is focused, some mobile browsers in some cases zoom in
// 		// It looks not nice, so we disable it:
	
// 	});
// });