//This JS is for calling highlight menu plugin

$(document).ready(function() {	
	
	//On ready of the document
	$("#menuItems").highlightMenu({
		'fontFamily' :'Comic Sans MS, Comic Sans, cursive'
	});	//Calling jquery highlightmenu plugin
	
	//This JS is used to call bx slider used for carousel on load of the page

	$('.bxslider').bxSlider({
		slideWidth: 600
	  });//Calling bxSlider function
  
	$("#tabs").tabs();

}); 