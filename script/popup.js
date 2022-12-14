
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
	// type: 'image',
	preloader: true,
	fixedContentPos: false,
	mainClass: 'about__popup',
	closeBtnInside:true,
	callbacks:{
		open(){
			 $('body').addClass('fixed');
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
			  
			
		},
		close(){
			$('body').removeClass('fixed');
		}
		
	}

})
$('.popup-about-certif').magnificPopup({
	preloader: false,
	// type: 'inline',
	mainClass: 'about__popup',
	type: "inline",
	fixedContentPos: false,
	callbacks:{
		open(){
			$('body').addClass('fixed');
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
			  
			
		},
		close(){
			$('body').removeClass('fixed');
		}
		
	}

})

$(".form-popup__close").click(function() {
	$('.form-popup').removeClass('open-form');
	$('body').removeClass('fixed')
  });
		
});

$(document).mouseup(function (e) {
    var container = $(".form-popup__text");
    if (container.has(e.target).length === 0){
		$('.form-popup').removeClass('open-form');
		$('body').removeClass('fixed')
    }
});
