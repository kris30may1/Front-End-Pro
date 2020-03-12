'use strict'

const API = require('./API');
const jqueryGallery = require('./jquery-gallery')

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';

API.getPhotos(PHOTOS_URL);
jqueryGallery.jqueryGallery();