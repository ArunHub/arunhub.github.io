function animateToTop(event) {
    event.preventDefault();
    // bullbear.style.backgroundPosition = "6px -41px";
    var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if ( pos > 0 ) {
            
            window.scrollTo( 0, pos - 20 );
        } else {
            window.clearInterval( scrollToTop );
        }
    }, 16);
}

function scrollUp(){
	bullbear.style.backgroundPosition = "6px -41px";
}

(function () {
	var previousScroll = 0;
	window.onscroll = function(){
		
		var currentScroll = this.pageYOffset;

			//while going down
		if (currentScroll > previousScroll) {
			console.log('down',currentScroll ,previousScroll)
			bullbear.style.backgroundPosition = "6px 6px";
			if (currentScroll > 200) {
				bullbear.style.transform = "scale(1)";
			} 	
		}
		else{				
			console.log('up',currentScroll ,previousScroll);
			bullbear.style.backgroundPosition = "6px -41px";
			if (currentScroll < 200) {
				bullbear.style.transform = "scale(0)";
			} 	
			
		}
		previousScroll = currentScroll;
		
	}
})();

var bullbear = document.getElementById('bullbear');

bullbear.addEventListener('click',animateToTop,false);
