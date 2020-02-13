'use strict'

const LS_KEY = 'stickersList';
const addNewTaskBtn = document.querySelector('#add-new-sticker-btn');
const stickerTemplate = document.querySelector('#new-sticker').innerHTML;
const board = document.querySelector('#board');

let stickers = [];
let sticker = {};

addNewTaskBtn.addEventListener('click', onAddNewTaskBtnClick);
board.addEventListener('blur', onStickerBlur, true);
board.addEventListener('click', onDeleteIconClick);

getStickers();

function onAddNewTaskBtnClick() {
    createNewSticker(sticker);
}

function onStickerBlur(e) {
    if (e.target.classList.contains('.sticker')) {
         updateSticker(e);
     }
}

function onDeleteIconClick(e) {
    console.log(e.target);
    if (e.target) {
        console.log(e.target.parentNode.parentNode);
        deleteSticker(e.target.parentNode.parentNode.dataset.id);
    }
}

function createNewSticker(sticker) {            ////This method is ready
    sticker.id = Date.now();
    stickers.push(sticker);
    renderStickersBoard(stickers);

    localStorage.setItem(LS_KEY, JSON.stringify(stickers));
}

function setStickers(data) {
    return (stickers = data);
}

function getStickers() {                   ////// this method is ready
    let data = localStorage.getItem(LS_KEY);
    data = data ? JSON.parse(data) : [];
    setStickers(data);

    renderStickersBoard(data);
}

function renderStickersBoard(data) {                /////this method is ready
    board.innerHTML = data.map(generateStickerHtml).join('\n');
}
 
function generateStickerHtml(sticker) {
    return stickerTemplate
        .replace('{{id}}', sticker.id);
}

function updateSticker(sticker) {
    stickers = stickers.map(item => (item.id == sticker.id ? sticker : item));
    localStorage.setItem(LS_KEY, JSON.stringify(stickers));

    renderStickersBoard(stickers);
}

function deleteSticker(id) {
    stickers = stickers.find(sticker => sticker.id !== id);
    renderStickersBoard(stickers);

    localStorage.setItem(stickers);
}