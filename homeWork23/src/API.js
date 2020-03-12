'use strict'

const galleryData = require('./gallery-data');
const galleryHTML = require('./gallery-html');

module.exports = function getPhotos(URL) {
    return fetch(URL) 
        .then(resp => resp.json())
        // .then(galleryData)
        .then(galleryHTML.renderGallery());
}