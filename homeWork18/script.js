'use strict'

const LS_KEY = 'tasksList';
const DEFAULT_TASK_STATE = 'new';

const $toDoForm = $('#toDoForm');
const $taskInput = $('#task-input');
const $toDoList = $('#todo-list');
const $liTemplate = $('#li-template').html();
const $errorMessage = $('#errorMessage');
const $deleteIcon = $('.close');

$toDoForm.on('submit', onToDoFormSubmit);
$toDoList.on('click', 'li', onTaskClick);
$toDoList.on('click', '.close', onDeleteIconClick);

let tasks = [];

init();

function init() { 
    hideError();      
    getTaskList();
    setTasks(tasks);
    getTaskState(tasks);
    renderTaskList(tasks);  
}

function onToDoFormSubmit(e) {         
    e.preventDefault();
    const task = createNewTask();
    task.text = getTaskValue();
   
    if (validNewTask(task)) {
        tasks.push(task);
        renderTaskList(tasks);
        saveTask(tasks);
        hideError();
    } else {
        showError();
    }
    
    clear();
    focus();
}

function onTaskClick(e) {
    const $el = $(e.target);
    toggleTaskState($el);
    const id = findElId($el);
    setTaskState(id);
    saveTask(tasks);
}

function onDeleteIconClick(e) {
    const $el = $(e.target.parentNode);
    deleteTask($el);
}

function deleteTask(el) {
    console.log(el);
    $(el).remove();
}

function toggleTaskState(el) {
    $(el).toggleClass('done');
}

function setTaskState(id) {
    const obj = tasks.find(el => el.id == +id);
    if(obj.state = DEFAULT_TASK_STATE) {
        obj.state = 'done'
    } else (DEFAULT_TASK_STATE);
    console.log(obj);
    return obj;
}

function validNewTask(task) {
    return task.text != '';
}

function getTaskState(data) {
    data.forEach(el => el.state == 'done' ? toggleTaskState(el) : '');
}

function findElId(el) {
    return el.data('id');
}

function getTaskValue() {
    return $taskInput.val();
}

function getTaskList() {
    let data = localStorage.getItem(LS_KEY);
    data = data ? JSON.parse(data) : [];
    tasks = data;
}

function renderTaskList(data) {
    $toDoList.html(data.map(generateTaskHtml).join('\n'));
}

function generateTaskHtml(task) {
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

function focus(){
    $taskInput.focus();
}

function showError(){
    $errorMessage.show();
}

function hideError(){
    $errorMessage.hide();
}