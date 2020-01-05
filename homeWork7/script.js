'use strict'

const input = document.querySelector('#rowsCount');
const UlList = document.querySelector('#list');

document.querySelector('#generateBtn').addEventListener('click', onGenerateBtn);

function onGenerateBtn(){
    clearList();
    generateList();
    clear();
    focus();   
}

function generateList(){
    const countOfLiElms = getNumberOfRows();
    listCreation(countOfLiElms);
}

function getNumberOfRows(){
    return +input.value
}

function listCreation(num){
    for(let i = 1; i <= num; i++){
        const liElm = document.createElement('li');
        liElm.appendChild(document.createTextNode([i]));
        UlList.appendChild(liElm);
    }
}

function focus(){
    input.focus();
}

function clear(){
    input.value = '';
}

function clearList(){
    UlList.innerHTML = '';
}