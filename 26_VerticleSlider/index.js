const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let index = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = function(direction) {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up'){
        index++;
        if(index > slidesLength -1) {
            index = 0;
        }
    }else if(direction === 'down') {
        index--;
        if(index < 0) {
            index = slidesLength - 1;
        }
    }
    slideRight.style.transform = `translateY(-${index * sliderHeight}px)`;
    slideLeft.style.transform =`translateY(${index * sliderHeight}px)`;
}