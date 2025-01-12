const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colours = {
  fire: "#fddfdf",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#F4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#fbd5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#f5f5f5",
  fighting: "#e6e0d4",
  normal: "#f5f5f5",
};

const mainTypes = Object.keys(colours);

const fetchPokemons = async function () {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async function (id) {
  const url = ` https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const { name, id, sprites } = pokemon;
  const newId = id.toString().padStart(3, "0");

  const pokeTypes = pokemon.types.map(type => type.type.name);
  const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1);

  const colour = colours[type];

 

  const newName = name[0].toUpperCase() + name.slice(1);
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  pokemonEl.style.backgroundColor = colour;

  const pokemonInnerHtml = `
   
   <div class="img-container">
    <img src="${sprites.front_default}" alt="">
    </div>
    <div class="info">
    <span class="number">#${newId}</span>
    <h3 class="name">${newName}</h3>
    <small class="type">Type: <span>${type}</span></small>
    </div>`;

  pokemonEl.innerHTML = pokemonInnerHtml;

  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
