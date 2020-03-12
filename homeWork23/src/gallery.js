'use strict'

require(['./lightgallery.js'], function() {
    require(["./lg-zoom.js", "./lg-thumbnail.js"], function(){
        $("#lightgallery").lightGallery(); 
    });
});

module.exports = function initGallery(){
    $(document).ready(function() {
        $("#lightgallery").lightGallery(); 
    });
}

const $photoTemplate = $('#photo-template').html();
const $gallery = $('#lightgallery');

module.exports = function renderGallery(data) {
    $gallery.html(data.map(generatePhoto).join('\n'));
}

function generatePhoto(el) {
    return $photoTemplate.replace('{{photoUrl}}', el.thumbnailUrl);
}

 