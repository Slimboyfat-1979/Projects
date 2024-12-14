'use strict'

const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clicks = [];
let timesClicked = 1;

loveMe.addEventListener('click', (e) => {
    clicks.push(e.timeStamp);
   
   if(clicks.length === 2) {
        if(clicks[1] - clicks[0] < 800) {
           createHeart(e);
        }else{
            console.log('regiseter single click')
        }
        clicks = [];
   }
})

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffSet = e.target.offsetLeft;
    const topOffSet = e.target.offsetTop;

    const xInside = x - leftOffSet;
    const yInside = y - topOffSet;

    console.log(xInside, yInside);

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);
    times.innerHTML = timesClicked++;

    setTimeout(() => {
        heart.remove();
    }, 1000);
}