'use strict'

const LS_KEY = 'tasksList';

const $toDoForm = $('#toDoForm');
const $taskInput = $('#task-input');
const $toDoList = $('#todo-list');
const $liTemplate = $('#li-template').html();
const $errorMessage = $('#errorMessage');

$toDoForm.on('submit', onToDoFormSubmit);
$toDoList.on('click', 'li', onTaskClick);

let tasks = [];

init();

function init() {        ///// done
    getTaskList();
    
}

function onToDoFormSubmit(e) {         ///// done
    e.preventDefault();
    const task = createNewTask();
    task.text = getTaskValue();
    tasks.push(task);
    renderTaskList(tasks);
    saveTask(tasks);
    clear();
}

function onTaskClick(e) {
    const $el = $(e.target);
    console.log($el);
    toggleTaskState($el);
    const id = findElId($el);
    setTaskState(id);
}

function toggleTaskState(el) {
    el.toggleClass('done');
}

function setTaskState(id) {
    const obj = tasks.find(el => el.id == +id);
    obj.state = 'done';
}

function findElId(el) {
    console.log(el);
    return el.dataset.id;
}

function getTaskValue() {
    return $taskInput.val();
}

function getTaskList() {
    let data = localStorage.getItem(LS_KEY);
    data = data ? JSON.parse(data) : [];

    setTasks(data);
    renderTaskList(data);
    console.log(data);
}

function renderTaskList(data) {
    $toDoList.html(data.map(generateTaskHtml).join('\n'));
}

function generateTaskHtml(task) {
    console.log($liTemplate);
    return $liTemplate
        .replace('{{id}}', task.id)
        .replace('{{text}}', task.text);
}

function createNewTask() {            
    let task = {};
    task.id = Date.now();
    task.text = '';
    task.state = 'new';
    return task;
}

function setTasks(data) {
    return (tasks = data);
}

function saveTask(data){
    localStorage.setItem(LS_KEY, JSON.stringify(data));    
}

function clear(){
    $taskInput.val('');
}

function showError(){
    $errorMessage.hide();
}

function hideError(){
    $errorMessage.show();
}