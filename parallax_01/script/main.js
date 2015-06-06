$(window).load(function() {
	fixSizes();
	//$("body").css("overflow", "auto");	
	
	var s = skrollr.init({
		smoothScrolling: true,
		forceHeight: false
		
	}); 	
});

$(window).resize(function() {
	//fixSizes();
});

function fixSizes() {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	

	//$("section").css('height', windowHeight);
	

	//$(".entry-title").css('margin-top', ($("#entry").height() - $(".entry-title").height()) / 2.5);

}