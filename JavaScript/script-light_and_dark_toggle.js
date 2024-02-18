function toggleMode() {
    var stylesheet = document.getElementById('themeStylesheet');
    if (stylesheet.href.includes('CSS/styles-light.css')) {
        stylesheet.href = 'CSS/styles-dark.css'; // Switch to dark mode
    } else {
        stylesheet.href = 'CSS/styles-light.css'; // Switch to light mode
    }
}
