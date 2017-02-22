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
	window.onscroll = function(){
		var scrollPos = window.pageYOffset,
		heightPage    = document.body.offsetHeight,
		touchBottom	  = heightPage/2;
		if (scrollPos > 200) {
			console.log(scrollPos,document.body.offsetHeight);
			//while going down
			bullbear.style.transform = "scale(1)";	
		}
		// if(scrollPos > heightPage/2){
		// 	scrollUp();
		// }
		//while going up less than 200
			else{				
				bullbear.style.transform = "scale(0)";		
			}
		
	}
})();

var bullbear = document.getElementById('bullbear');

bullbear.addEventListener('click',animateToTop,false);
