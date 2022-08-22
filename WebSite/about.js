/* slide_show.js */
$(document).ready(function(){
	console.log("Ram Rice Cookers");

		$("#about").click(
			function(){
				$(".about").slideToggle(3000);
			}
		);

		$("#OurStory").click(
			function(){
				$(".OurStory").slideToggle(3000);
			}
		)

		$("#WhyShop").click(
			function(){
				$(".WhyShop").slideToggle(3000);
			}
		)

}); // end of read