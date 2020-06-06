
$(document).ready(function() {
        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
            	
                $('.header-sticky').addClass("is-sticky");
            }
            else{
                $('.header-sticky').removeClass("is-sticky");
            }
        });
		


      
        // Search Popup JS
        $('.close-btn').on('click',function() {
            $('.search-overlay').fadeOut();
            $('.search-btn').show();
            $('.close-btn').removeClass('active');
        });
        
		}); 

	