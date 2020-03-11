'use strict'

const galleryData = require('./gallery-data')

module.exports = function getPhotos(PHOTOS_URL) {
    return fetch(PHOTOS_URL) 
        .then(resp => resp.json())
        .then(galleryData.setPhotos)
        .then(renderGallery);
}