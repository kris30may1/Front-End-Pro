'use strict'

const $photoTemplate = $('#photo-template').html();
const $gallery = $('#lightgallery');

module.exports = function renderGallery(data) {
    $gallery.html(data.map(generatePhoto).join('\n'));
}

function generatePhoto(el) {
    return $photoTemplate.replace('{{photoUrl}}', el.thumbnailUrl);
}