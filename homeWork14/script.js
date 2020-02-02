'use strict'

const taskInput = document.querySelector('#toDoInput');
const toDoList = document.querySelector('#toDoList');
const liTemplate = document.querySelector('#liTemplate').innerHTML;
const errorMessage = document.querySelector('#errorMessage');

const fetchTitles = fetch('https://jsonplaceholder.typicode.com/todos');
fetchTitles.then(response => {
    return response.json();
}).then(tasks => {
    const titles = tasks.map(
        task => generateLi(task.title)
    ).join('\n');
    toDoList.innerHTML = titles;
})

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

function getTaskStr(){
    return taskInput.value;
}

function createOfElmInList(){
    const task = getTaskStr();
    let template = generateLi(task);
    toDoList += template;
}

function generateLi(task){
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
