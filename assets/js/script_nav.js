const hamburger = document.querySelector('.btn-hamburger');
hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
});