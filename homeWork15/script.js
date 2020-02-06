'use strict'

const listOfAlbums = document.querySelector('#albums');
const gallery = document.querySelector('#gallery');
const liTemplate = document.querySelector('#liTemplate').innerHTML;
const divTemplate = document.querySelector('#divTemplate').innerHTML;

const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';

listOfAlbums.addEventListener('click', onAlbumItemClick);

getAlbums();

function getAlbums(){
    fetch(ALBUMS_URL)
        .then(response => response.json())
        .then(albums => {
        const titles = albums.map(
            album => generateLi(album)
        ).join('\n');
        listOfAlbums.innerHTML = titles;
    }) 
}

function onAlbumItemClick(e) {
    getPhotos(e.target);
}

function getPhotos(el) {
    fetch(`${PHOTOS_URL}?albumId=${el.dataset.id}`)
        .then(response => response.json())
        .then(photos => {const urls = photos.map(
            photo => generateDiv(photo)
        ).join('\n');
            gallery.innerHTML = urls;
        })
}

function generateDiv(el) {
    return divTemplate.replace('{{photoUrl}}', el.thumbnailUrl);
}

function generateLi(album) {
    return liTemplate.replace('{{newAlbum}}', album.title)
                     .replace('{{id}}', album.id);
}
