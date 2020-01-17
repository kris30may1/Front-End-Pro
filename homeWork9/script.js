'use strict'

const nameFld = document.querySelector('#name');
const surnameFld = document.querySelector('#surname');
const phoneFld = document.querySelector('#phone');
const contactTable = document.querySelector('#contactTable');
const tableBody = document.querySelector('#tableBody');
const dataForm = document.querySelector('#dataForm');
const fieldTemplate1 = document.querySelector('#fldsTemplate1').innerHTML;
const fieldTemplate2 = document.querySelector('#fldsTemplate2').innerHTML;
const fieldTemplate3 = document.querySelector('#fldsTemplate3').innerHTML;

document.querySelector('#dataForm').addEventListener('submit', onAddContactFormSubmit);
tableBody.addEventListener('click', onRemoveIconClick);

function onAddContactFormSubmit(e){
    e.preventDefault();
    submitForm();
}

function onRemoveIconClick(e){
    if(e.target.classList.contains('icon')){
        removeRow(e.target.parentNode);
    }   
}

function submitForm() {
    const rowData = {name: nameFld.value,
                    surname: surnameFld.value,
                    phone: phoneFld.value};
    
    addNewRow(rowData);
    resetForm();
}

function removeRow(el){
    el = el.parentNode;
    el.remove();
    }   

function toggleInputState(el){
    el.classList.toggle('error');
}

function addNewRow(row) {
    const html = fieldTemplate1.replace('{{name}}', row.name);
    const html1 = fieldTemplate2.replace('{{surname}}', row.surname);
    const html2 = fieldTemplate3.replace('{{phone}}', row.phone);

    const newRow = tableBody.insertRow(0);
    newRow.className = 'rowItem';

    newRow.innerHTML += html;
    newRow.innerHTML += html1;
    newRow.innerHTML += html2;    
}

function resetForm(){
    dataForm.reset();
}

