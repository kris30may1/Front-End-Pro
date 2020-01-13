'use strict'

const taskInput = document.querySelector('#toDoInput');
const toDoList = document.querySelector('#toDoList');
const liTemplate = document.querySelector('#liTemplate').innerHTML;
const errorMessage = document.getElementById('errorMessage');
const defColor = toDoList.style.backgroundColor;

document.querySelector('#toDoForm').addEventListener('submit', onToDoFormSubmit);
document.querySelector('#addBtn').addEventListener('click', onToDoFormSubmit);
toDoList.addEventListener('click', onLiElmClick);


function onToDoFormSubmit(e){
    e.preventDefault();
    const task = getTaskStr();
    if(validateNewTask(task)){
        createToDoList();
    } else {
        showError();
    }
    clear();
    focus();
}

function onLiElmClick(e) {
if(e.target.style.backgroundColor == defColor)
    e.target.style.backgroundColor = 'green';
else{e.target.style.backgroundColor = defColor;}	
}

function createToDoList(){
    recTaskinToDoList();
}

function getTaskStr(){
    return taskInput.value
}

function recTaskinToDoList(){
    let template = addToDo();
    toDoList.innerHTML += template;
}

function addToDo(){
    return liTemplate.replace('{{newTask}}', getTaskStr());
}

function validateNewTask(task) {
    return task != '';
}

function focus(){
    taskInput.focus();
}

function clear(){
    taskInput.value = '';
}

function showError(){
    errorMessage.hidden = false;
}

function hideError(){
    errorMessage.hidden = true;
}
