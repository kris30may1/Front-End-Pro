'use strict'

const LS_KEY = 'tasksList';

const $toDoForm = $('#toDoForm');
const $taskInput = $('#toDoInput');
const $toDoList = $('#toDoList');
const $liTemplate = $('#liTemplate').wrapInner;
const $errorMessage = $('#errorMessage');

$toDoForm.on('submit', onToDoFormSubmit);
$toDoList.on('click', 'li', onTaskClick);

let tasks = [];

init();

function init() {
    getTaskList();
}

function onToDoFormSubmit(e) {
    e.preventDefault();
    const task = createNewTask();
    task.text = getTaskValue();
    tasks.push(task);
    renderTaskList(tasks);
}

function onTaskClick(e) {
    const $el = $(e.target);
}

function getTaskValue() {
    return $taskInput.val();
}

function getTaskList() {
    let data = localStorage.getItem(LS_KEY);
    data = data ? JSON.parse(data) : [];

    setTasks(data);
    renderTaskList(data);
}

function renderTaskList(data) {
    $toDoList.wrapInner(data.map(generateTaskHtml).join('\n'))
}

function generateTaskHtml(task) {
    return $liTemplate
        .replace('{{id}}', task.id)
        .replace('{{newTask}}', task.text);
}

function createNewTask() {            
    let task = {};
    task.id = Date.now();
    task.text = '';
    task.state = '';
    return task;
}

function setTasks(data) {
    return (tasks = data);
}

function saveTask(data){
    localStorage.setItem(LS_KEY, JSON.stringify(data));    
}

function clear(){
    $taskInput.empty();
}

function showError(){
    $errorMessage.hide();
}

function hideError(){
    $errorMessage.show();
}