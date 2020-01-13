'use strict'

const taskInput = document.querySelector('#toDoInput');
const toDoList = document.querySelector('#toDoList');
const arrOfLi = document.querySelectorAll('#toDoList');
const liTemplate = document.querySelector('#liTemplate').innerHTML;

document.querySelector('#toDoForm').addEventListener('submit', onToDoFormSubmit);
document.querySelector('#addBtn').addEventListener('click', onToDoFormSubmit);
toDoList.addEventListener('click', onLiElmClick, false);


function onToDoFormSubmit(e){
    e.preventDefault();
    createToDoList();
    clear();
    focus();
}

function onLiElmClick(e) {
    e.target.style.backgroundColor = 'green';
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

// function validateNewTask(task) {
//     return task != '';
// }

function focus(){
    taskInput.focus();
}

function clear(){
    taskInput.value = '';
}