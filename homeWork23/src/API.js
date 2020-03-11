'use strict'

const galleryData = require('./gallery-data');
const galleryHTML = require('./gallery-html');

module.exports = function getPhotos(PHOTOS_URL) {
    return fetch(PHOTOS_URL) 
        .then(resp => resp.json())
        .then(galleryData.setPhotos)
        .then(galleryHTML.renderGallery);
}