'use strict'

const LS_KEY = 'stickersList';
const addNewTaskBtn = document.querySelector('#add-new-sticker-btn');
const stickerTemplate = document.querySelector('#new-sticker').innerHTML;
const board = document.querySelector('#board');

let stickers = [];

addNewTaskBtn.addEventListener('click', onAddNewStickerBtnClick);
board.addEventListener('click', onDeleteIconClick);
board.addEventListener('blur', onStickerBlur, true);

getStickers();

function onAddNewStickerBtnClick() {
    const sticker = createNewSticker();
    stickers.push(sticker);
    renderStickersBoard(stickers);
    saveStickers(stickers);
}

function onStickerBlur(e) {   
    updateSticker(e.target);
    renderStickersBoard(stickers);
    saveStickers(stickers);
}

function updateSticker(data) {
    saveText(data);
    const obj = findStickerById(data);
    obj.text = data.value;
}

function findStickerById(data) {
    const id = data.parentNode.dataset.id;
    const obj = stickers.find(el => el.id == +id);
    return obj;
}

function saveText(el) {
    el.innerHTML = el.value;
}

function onDeleteIconClick(e) {
    if (e.target.classList.contains('close')) {
        const item = e.target.parentNode.parentNode;
        
        deleteSticker(item.dataset.id);
        renderStickersBoard(stickers);
        saveStickers(stickers);
    }
}

function saveStickers(data){
    localStorage.setItem(LS_KEY, JSON.stringify(data));    
}

function createNewSticker() {            
    let sticker = {};
    sticker.id = Date.now();
    sticker.text = '';
    return sticker;
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

function renderStickersBoard(data) {               
    board.innerHTML = data.map(generateStickerHtml).join('\n');
}
 
function generateStickerHtml(sticker) {
    return stickerTemplate
        .replace('{{id}}', sticker.id)
        .replace('{{text}}', sticker.text);
}

function deleteSticker(id) {
    stickers = stickers.filter(sticker => sticker.id !== +id);
}