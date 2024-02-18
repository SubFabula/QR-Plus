function toggleMode() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.href.includes('styles-light.css')) {
        stylesheet.href = 'styles-dark.css'; // Switch to dark mode
    } else {
        stylesheet.href = 'styles-light.css'; // Switch to light mode
    }
}
