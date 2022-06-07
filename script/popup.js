
$(document).ready(function() {
	
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
	closeBtnInside:true,
	callbacks:{
		open(){
			
				$(".owl-carousel-dip").owlCarousel({
					margin:10,
					loop:true,
					autoWidth:true,
					items:2,
					stagePadding: 20,
					pagination : true,
					// Responsive 
					responsive: true,
					responsiveRefreshRate : 200,
					responsiveBaseWidth: window,
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
			
				$(".owl-carousel-serf").owlCarousel({
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