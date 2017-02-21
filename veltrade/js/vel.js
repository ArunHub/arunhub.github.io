function animateToTop(event) {
    event.preventDefault();
    var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if ( pos > 0 ) {
            window.scrollTo( 0, pos - 20 );
        } else {
            window.clearInterval( scrollToTop );
        }
    }, 16);
}

(function () {
	window.onscroll = function(){
		var scrollPos = window.pageYOffset;
		if (scrollPos > 200) bullbear.style.display = "block"		
			else
				bullbear.style.display = "block"
			
		
	}
})();

var bullbear = document.getElementById('bullbear');

bullbear.addEventListener('click',animateToTop,false);
