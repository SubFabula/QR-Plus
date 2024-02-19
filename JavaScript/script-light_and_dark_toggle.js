// script-light_and_dark_toggle.js

function toggleMode() {
    var body = document.body;
    var themeStylesheet = document.getElementById('themeStylesheet');
    var isLightMode = themeStylesheet.href.includes('styles-light-png.css');

    // Toggle between light and dark mode classes on the body element
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    // Toggle between light and dark mode stylesheets
    if (isLightMode) {
        // Switch to dark mode
        themeStylesheet.href = 'CSS/styles-dark-png.css';
    } else {
        // Switch to light mode
        themeStylesheet.href = 'CSS/styles-light-png.css';
    }
}

