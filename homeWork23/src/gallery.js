'use strict'

const API = require('./API');
const $ = require('jquery');

require(['./lightgallery.js'], function() {
    require(["./lg-zoom.js", "./lg-thumbnail.js"], function(){
        $("#lightgallery").lightGallery(); 
    });
});

const photoTemplate = $('#photo-template').html();
const $gallery = $('#lightgallery');

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';

init();

module.exports = function init() {
    initGallery();
    API(PHOTOS_URL);
}

function initGallery(){
    $(document).ready(function() {
        $gallery.lightGallery(); 
    });
}

module.exports = function renderGallery(data) {
    $gallery.html(data.map(generatePhoto).join('\n'));
}

function generatePhoto(el) {
    return photoTemplate.replace('{{photoUrl}}', el.thumbnailUrl);
}

 