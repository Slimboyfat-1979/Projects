const getJokeBtn = document.querySelector('.btn');
const jokeContent = document.querySelector('.joke');

getJokeBtn.addEventListener('click', getDadJoke);

async function getDadJoke() {
    const headers = {   
       method: "GET", 
       headers: {
        "Accept" : "application/json"
       }
    }
    const dadJoke = await fetch('https://icanhazdadjoke.com/', headers);
    const response = await dadJoke.json();
    console.log(response);
    jokeContent.textContent = response.joke;
}