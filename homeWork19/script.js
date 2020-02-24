'use strict'

const LS_KEY = 'stickersList';
const $addNewTaskBtn = $('#add-new-sticker-btn');
const stickerTemplate = $('#new-sticker').html();
const $StickerNameInput = $('#StickerNameInput');
const $board = $('#sortable-board');

let dialog;
let stickers = [];

$addNewTaskBtn.on('click', onAddNewStickerBtnClick);
$board.on('click', '.close', onDeleteIconClick);
$board.on('focusout', '.sticker', onStickerBlur);
$board.on('click', '.sticker', onStickerClick);

init();

function init(){ 
    initDialog();
    getStickers();
}

function onStickerClick() {
    sortableBoard();
}

function AddNewSticker() {
    const sticker = createNewSticker();
    stickers.push(sticker);
    renderStickersBoard(stickers);
    saveStickers(stickers);
}

function onAddNewStickerBtnClick() {
    dialog.dialog('open');
}

function initDialog() {
    dialog = $('#dialog-form').dialog({
        autoOpen: false,
        height: 200,
        width: 350,
        modal: true,
        buttons: {
            Create: function() {
                AddNewSticker();
                dialog.dialog('close');
            },
            Cancel: function() {
                dialog.dialog('close');
            }
        },
        close: function() {
            $StickerNameInput.val('');
        }
    });
}

function sortableBoard() {
    $board.sortable();
    $board.disableSelection();
}

function onStickerBlur(e) {   
    const $el = $(e.target);
    updateSticker($el);
    renderStickersBoard(stickers);
    saveStickers(stickers);
}

function onDeleteIconClick(e) {
    const $closeIcon = $(e.target);
    const $sticker = $closeIcon.parent();
    const id = getStickerId($sticker);
   
    deleteSticker(id);
    renderStickersBoard(stickers);
    saveStickers(stickers);
}

function updateSticker($el) {
    saveText($el);
    const obj = findStickerById($el);
    obj.text = $el.val();
}

function findStickerById($el) {
    const id = getStickerId($el);
    const obj = stickers.find(el => el.id == +id);
    return obj;
}

function getStickerId($el) {
    const $item = $el.parent();
    return $item.data('id');
}

function saveText($el) {
    $el.html($el.val());
}

function saveStickers(data){
    localStorage.setItem(LS_KEY, JSON.stringify(data));    
}

function createNewSticker() {            
    let sticker = {};
    sticker.id = Date.now();
    sticker.text = $StickerNameInput.val();
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
    $board.html(data.map(generateStickerHtml).join('\n'));
}
 
function generateStickerHtml(sticker) {
    return stickerTemplate
        .replace('{{id}}', sticker.id)
        .replace('{{text}}', sticker.text);
}

function deleteSticker(id) {
    stickers = stickers.filter(el => el.id !== +id);
}