// script-lazybackground.js
document.addEventListener("DOMContentLoaded", function() {
    var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

    if ("IntersectionObserver" in window) {
        var lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var lazyBackground = entry.target;
                    lazyBackground.style.backgroundImage = "url(" + lazyBackground.dataset.src + ")";
                    lazyBackgroundObserver.unobserve(lazyBackground);
                }
            });
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    } else {
        // Fallback for browsers that do not support IntersectionObserver
        lazyBackgrounds.forEach(function(lazyBackground) {
            lazyBackground.style.backgroundImage = "url(" + lazyBackground.dataset.src + ")";
        });
    }
});
