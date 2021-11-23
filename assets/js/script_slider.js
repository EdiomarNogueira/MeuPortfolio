let totalSlides = document.querySelectorAll('.slider--item').length; //Verifica a quantidade de slides
let currentSlide = 0;

let sliderWidth = document.querySelector('.section-skills').clientWidth; //verifica a largura dos slides

document.querySelector('.slider--width').style.width =
    `${sliderWidth * totalSlides}px`;
document.querySelector('.slider--controls').style.width =
    `${document.querySelector('.section-skills').clientWidth}px`;
document.querySelector('.slider--controls').style.height =
    `${document.querySelector('.section-skills').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderWidth);
    document.querySelector('.slider--width').style.marginLeft =
        `-${newMargin}px`;
}

setInterval(goNext, 3000);