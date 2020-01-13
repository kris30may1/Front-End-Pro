'use strict'

const taskInput = document.querySelector('#toDoInput');
const toDoList = document.querySelector('#toDoList');
const liTemplate = document.querySelector('#liTemplate').innerHTML;
const errorMessage = document.querySelector('#errorMessage');

document.querySelector('#toDoForm').addEventListener('submit', onToDoFormSubmit);
toDoList.addEventListener('click', onLiElmClick);


function onToDoFormSubmit(e){
    e.preventDefault();
    const task = getTaskStr();
    if(validateNewTask(task)){
        createOfElmInList();
    } else {
        showError();
    }
    clear();
    focus();
}

function onLiElmClick(e) {
    if(e.target.classList.contains('task-item')){
        toggleTaskState(e.target);
    }	
}

function toggleTaskState(el) {
    el.classList.toggle('done');
}

function createOfElmInList(){
    recTaskinToDoList();
}

function getTaskStr(){
    return taskInput.value
}

function recTaskinToDoList(){
    let template = generateLi();
    toDoList.innerHTML += template;
}

function generateLi(task){
    task = getTaskStr();
    return liTemplate.replace('{{newTask}}', task);
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
