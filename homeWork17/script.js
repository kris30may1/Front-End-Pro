'use strict'

const LS_KEY = 'stickersList';
const addNewTaskBtn = document.querySelector('#add-new-task-btn');
const stickerTemplate = document.querySelector('#new-sticker').innerHTML;
const board = document.querySelector('#board');

let stickers = [];
let sticker = {};

addNewTaskBtn.addEventListener('click', onAddNewTaskBtnClick);
board.addEventListener('submit', onAddStickerSubmit)
     .addEventListener('click', onDeleteIconClick);

function onAddNewTaskBtnClick() {
    createNewSticker(sticker);
}

function onAddStickerSubmit(e) {
    e.preventDefault();
    if (e.targer.contains.classList('.sticker')) {
         addStickerText(e);
     }
}

function onDeleteIconClick(e) {
    if (e.targer.contains.classList('.icon close')) {
        deleteSticker(e);
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

function getStickers() {
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

function addStickerText() {

}

function deleteSticker(id) {
    stickers = sticker.filter(sticker => sticker.id !== id);
    localStorage.removeItem(sticker);
    renderStickersBoard();
}