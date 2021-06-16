document.getElementById('background-image').src = 'images/stock' + Math.ceil(Math.random() * 10) + '.svg';

function underline(id) {
    for (var i = 0; i < 4; i++) {
        document.getElementById('link-' + i).style.textDecoration = 'none'; // Removes the underline from all links
    }
    document.getElementById(id).style.textDecoration = 'underline'; // Adds underline to desired link
}