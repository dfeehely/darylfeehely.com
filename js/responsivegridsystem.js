<!-- hide from old browsers

var days = new Array();
days[0] = "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";

var months = new Array();
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

// end script hiding -->


$(document).ready(function() {

    $(".jumper").on("click", function( e ) {

        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: ($( $(this).attr('href') ).offset().top) -40
        }, 1000);

    });

}); 

// $(document).click(function(event){

// 	$( "#portfoliolist .portfolio" ).each(function( index ) {
// 		if($(this).attr('class').contains("flip")) {
// 		  //console.log( index + ": " + $( this ).text() );
// 		  //$(this).toggleClass("flip"); 
// 		  alert(1);
// 		}
// 	});
  
// });


$("#portfoliolist .portfolio").click(
	function() {
	    // if($(this).attr('class').contains("flip")) {
	    // 	$(this).toggleClass("flip"); 
	    // } else {
	    // 	$(this).toggleClass("flip"); 
	    // }
	    // alert(2);
	    //$(this).toggleClass("flip"); 
	}
);



$(function () {
	var filterList = {
		init: function () {
		
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixitup({
				targetSelector: '.portfolio',
				filterSelector: '.filter',
				effects: ['fade'],
				easing: 'snap',
				// call the hover effect
				onMixEnd: filterList.hoverEffect()
			});				
		
		},
		hoverEffect: function () {
			// Simple parallax effect
			$('#portfoliolist .portfolio').hover(
				function () {
					$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
					$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');				
				},
				function () {
					$(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
					$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
				}		
			);				
		
		}

	};
	// Run the show!
	filterList.init();
});	

