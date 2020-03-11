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

 