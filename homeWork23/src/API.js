'use strict'

const renderGallery = require('./gallery');

module.exports = function getPhotos(URL) {
    return fetch(URL) 
        .then(resp => resp.json())
        .then(renderGallery());
}