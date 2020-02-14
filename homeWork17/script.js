'use strict'

const LS_KEY = 'stickersList';
const addNewTaskBtn = document.querySelector('#add-new-sticker-btn');
const stickerTemplate = document.querySelector('#new-sticker').innerHTML;
const board = document.querySelector('#board');

let stickers = [];

addNewTaskBtn.addEventListener('click', onAddNewTaskBtnClick);
board.addEventListener('click', onDeleteIconClick);
board.addEventListener('blur', onStickerBlur, true);

getStickers();

function onAddNewTaskBtnClick() {
    
    let sticker = createNewSticker();

    stickers.push(sticker);
   
    renderStickersBoard(stickers);

    saveStickers(stickers);
}

function onStickerBlur(e) {
    console.log(e.target);
    
    updateSticker(e.target);

    console.log(stickers);

    // renderStickersBoard(stickers);
    
    saveStickers(stickers);
}

function updateSticker(data) {
    saveText(data);

    const id = data.parentNode.dataset.id;

    console.log(id);
    
    stickers.find(el => (el.id == +id ? el.text = data.value : el));
    console.log(stickers);
}

function saveText(el) {
    el.innerHTML = el.value;
}

function onDeleteIconClick(e) {
    if (e.target.classList.contains('close')) {
        const item = e.target.parentNode.parentNode;
        
        deleteSticker(item.dataset.id);

        // getStickers(stickers);

        renderStickersBoard(stickers);

        saveStickers(stickers);
    }
}

function saveStickers(items){
    localStorage.setItem(LS_KEY, JSON.stringify(items));    
}

function createNewSticker() {            
    let sticker = {};
    sticker.id = Date.now();
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
        .replace('{{id}}', sticker.id);
}

function deleteSticker(id) {
    stickers = stickers.filter(sticker => sticker.id !== +id);
}