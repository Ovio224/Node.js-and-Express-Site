const btn = document.querySelector('.errstack');
const err = document.querySelector('.stack');

if (err) {
    err.style.display = 'none';
    btn.addEventListener('click', show);
}

function show() {
    if (err.style.display === 'none') {
        err.style.display = ''
    } else {
        err.style.display = 'none';
    }
}