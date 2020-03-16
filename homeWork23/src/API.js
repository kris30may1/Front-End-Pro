'use strict'
const API = {};
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';

API.getPhotos = (PHOTOS_URL) => { 
    return fetch(PHOTOS_URL) .then(resp => resp.json());
} 
