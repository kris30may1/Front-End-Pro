'use strict'

const API = require('./API');
const gallery = require('./gallery');

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';

API.getPhotos(PHOTOS_URL);
gallery.initGallery();