const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

let messageIndex = 0;
let type = ''

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

button.addEventListener('click', () => createNotification(type));



const createNotification = function(type) {
    const toast = document.createElement('div');
    toast.className = 'toast';

    toast.classList.add(type ? type : 'info')

    if(messageIndex === messages.length) {
        console.log("reached");
    }else{
        toast.textContent = messages[messageIndex];
        toasts.appendChild(toast);
        messageIndex++;
        setTimeout(() => {
            toast.style.opacity = 0;
        }, 2000)
    }
    toast.addEventListener('transitionend', () => {
        toast.remove();
    })
    
}