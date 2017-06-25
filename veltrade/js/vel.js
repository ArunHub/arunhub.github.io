// Auto initialize function for scroll to top
function animateToTop(event) {
    event.preventDefault();
    var scrollToTop = window.setInterval(function() {
        var position = window.pageYOffset;
        if (position > 0) {
            window.scrollTo(0, position - 20);
            console.log("text",event);
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 8);
}


// Auto initialize function for scroll position
(function() {
    var previousScroll = 0;

    window.onscroll = function() {
        var currentScroll = this.pageYOffset,
            SCROLL_AFTER_POS = 200;

        //while going down
        if (currentScroll > previousScroll) {
            bullbear.style.backgroundPosition = '2px -1px';
            if (currentScroll > SCROLL_AFTER_POS) {
                bullbear.style.transform = 'scale(1)';
                bullbear.style.display = 'block';
            }
        } else {
            bullbear.style.backgroundPosition = '2px -58px';
            if (currentScroll < SCROLL_AFTER_POS) {
                bullbear.style.transform = 'scale(0)';
                bullbear.style.display = 'none';
            }
        }

        previousScroll = currentScroll;
    }

})();

var bullbear = document.getElementById('bullbear');
bullbear.addEventListener('click', animateToTop, false);

window.onload = function() {

    document.getElementById('bestway').style.transform = "translateY(0px)";
    document.getElementById('bestway').style.opacity = "1";
    document.getElementById('learn-forex').style.transform = "scale(1)";

};
