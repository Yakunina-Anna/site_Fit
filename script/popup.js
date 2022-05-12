
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
    console.log('hi');
    // $.magnificPopup.close();
    $('#video-popup').magnificPopup({
      items: {
        src: '#video-popup',
        type: 'inline'
          }
   }).magnificPopup('open');
  });

//   $('popup-with-title').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image #%curr%...',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
// 			titleSrc: function(item) {
// 				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
// 			}
// 		}
// 	});
$('.popup-about').magnificPopup({
	preloader: false,
	// type: 'inline',
	// mainClass: 'about__popup',
	callbacks:{
		open(){
			const $diplom =$('.about__sliders');
			if (!$diplom.hasClass('.slick-initialized')){
				$diplom.slick({
					arrows:false,
					dots:false,
					adaptiveHeight:false, 
					slidesToShow:4, 
					slidesToScroll:3, 
					speed:700,         
					infinite: false,
				})
			}
			// $diplom.not('.slick-initialized')
			// $diplom.slick('slickGoTo',+$(this).attr('index'))
		}
		,
		// open:function(){
		// 	$('.about__sliders').slick({
		// 		arrows:false,
		// 		dots:false,
		// 		adaptiveHeight:false, 
		// 		slidesToShow:4, 
		// 		slidesToScroll:3, 
		// 		speed:700,         
		// 		infinite: false,
				
				
		// 	});
		// },
		close:function(){
			$('.about__sliders').not('.slick-initialized').slick()
			// $('.about__sliders').slick('slickGoTo',+$(this).attr('index'))
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