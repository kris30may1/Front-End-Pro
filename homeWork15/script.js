'use strict'

const listOfAlbums = document.querySelector('#albums');
const liTemplate = document.querySelector('#liTemplate').innerHTML;

const fetchTitles = fetch('https://jsonplaceholder.typicode.com/albums');
    console.log(fetchTitles);
    fetchTitles.then(response => response.json())
    .then(albums => {
        const titles = albums.map(
            album => generateLi(album.title)
        ).join('\n');
        listOfAlbums.innerHTML = titles;
    })

listOfAlbums.addEventListener('click', onAlbumItemClick);

function onAlbumItemClick(e){
    if (e.target) {

    }
}

function generateLi(album){
    return liTemplate.replace('{{newAlbum}}', album)
                     .replace('{{id}}');
}
