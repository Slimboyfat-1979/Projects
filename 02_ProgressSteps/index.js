const progress = document.getElementById("progress");
const prev = document.getElementById("pre");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circle.length) {
        currentActive = circle.length
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
})

const update = function() {
    circle.forEach((c, idx) =>{
        if(idx < currentActive) {
            c.classList.add("active");
        }else{
            c.classList.remove("active");
        }
    })

    const actives = document.querySelectorAll(".active");
    console.log((actives.length-1) / (circle.length-1) * 100);

    progress.style.width = (actives.length-1) / (circle.length-1) * 100 + "%";

    if(currentActive === 1) {
        prev.disabled = true;
    }else if(currentActive === circle.length) {
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }

}