function animateToTop(event) {
    event.preventDefault();
    var scrollToTop = window.setInterval(function() {
        var position = window.pageYOffset;
        if (position > 0) {

            window.scrollTo(0, position - 20);
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}

(function() {
    var previousScroll = 0;

    window.onscroll = function() {
        var currentScroll = this.pageYOffset;

        //while going down
        if (currentScroll > previousScroll) {
            bullbear.style.backgroundPosition = "6px 6px";
            if (currentScroll > 200) {
                bullbear.style.transform = "scale(1)";
            }
        } else {
            bullbear.style.backgroundPosition = "6px -41px";
            if (currentScroll < 200) {
                bullbear.style.transform = "scale(0)";
            }

        }
        previousScroll = currentScroll;
    }
    
})();

var bullbear = document.getElementById('bullbear');

bullbear.addEventListener('click', animateToTop, false);
