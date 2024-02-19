function toggleMode() {
    var body = document.body;
    if (body.classList.contains('dark-mode')) {
        // Switch to light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        // Switch to dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
}
