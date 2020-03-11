'use strict'

const $photoTemplate = $('#photo-template').html();
const $gallery = $('#lightgallery');

function renderTaskList(data) {
    $gallery.html(data.map(generatePhoto).join('\n'));
}

module.exports = function generatePhoto(el) {
    return $photoTemplate.replace('{{photoUrl}}', el.thumbnailUrl);
}