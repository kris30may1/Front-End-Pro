'use strict'

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';

function getPhotos() {
    return fetch(PHOTOS_URL) 
        .then(resp => resp.json())
        .then(setPhotos)
        .then(renderGallery);
}