const films = 'https://swapi.dev/api/films/';
const menu = document.getElementById('film');
const container = document.getElementById('container');
let store = [];
const getInfo = async (parametro) => {
    const response = await fetch(parametro);
    const data = await response.json();
    const {
        results
    } = data
    store = results;
    results.map((film, index) => {
        createOption(film.title, index);
    })
}


function createOption(filmName, filmIndex) {
    const option = document.createElement('option')
    option.innerText = filmName;
    option.setAttribute('value', filmIndex);
    menu.appendChild(option);
}
getInfo(films);

const getFilm = async (event) => {
    const data = store[event.target.value];
    Object.keys(data).map((elementName) => {
        if (Array.isArray(data[elementName])) {
            searchData(elementName, data[elementName][0]);
        }
    })
}

const searchData = async (nameItem, url) => {
    const response = await fetch(url);
    const data = await response.json();
    const notToShow = ['characters', 'planets', 'species', 'starships', 'vehicles', 'url', 'edited', 'created', 'films', 'people', 'residents', 'homeworld']
    divNew = document.getElementById(`${nameItem}`);
    while (divNew.firstChild) {
        divNew.firstChild.remove();
    };
    Object.keys(data).map((e) => {
        if (!notToShow.includes(e)) {
            const text = document.createElement('p');
            text.innerText = `${e}: ${data[e]}`;
            divNew.appendChild(text);
        }
    })
}

menu.addEventListener('change', getFilm);