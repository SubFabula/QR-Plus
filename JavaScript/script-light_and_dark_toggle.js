function toggleMode() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.href.includes('styles-light.css')) {
        stylesheet.href = 'CSS/styles-dark.css'; // Switch to dark mode
    } else {
        stylesheet.href = 'CSS/styles-light.css'; // Switch to light mode
    }
}
