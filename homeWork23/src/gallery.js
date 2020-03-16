'use strict'
$(() => {
    const photoTemplate = $('#photo-template').html();
    const $gallery = $('#gallery');
    
    init();
    
    function init() {
        initGallery();
        API.getPhotos(PHOTOS_URL).then(renderGallery);
    }
    
    function renderGallery(data) {
        $gallery.html(data.map(generatePhoto).join('\n'));
    }
    
    function generatePhoto(el) {
        return photoTemplate.replace('{{photoUrl}}', el.thumbnailUrl);
    }
    
    function initGallery() {
        $gallery.find('a').simpleLightbox({
            fileExt: false
        });
    }
})


