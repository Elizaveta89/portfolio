$(function(){
  
  $(window).load(function() {
    $(".about__text").mCustomScrollbar({theme:"minimal-dark", scrollInertia:100});

});


	var open = false;
		$('.contacts').click(function(){
				if (open == false) 
				{ 
					$('.contacts__dropdown').slideDown(300);
					open = true;
				} 
				else 
				{
					$('.contacts__dropdown').slideUp(300);
					open = false;
				}


		});	
});


