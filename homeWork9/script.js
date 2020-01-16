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
document.querySelector('#removeIcon').addEventListener('onclick', onRemoveIconClick);
nameFld.addEventListener('blur', onNameInputBlur, true);
surnameFld.addEventListener('blur', onSurnameInputBlur, true);
phoneFld.addEventListener('blur', onPhoneInputBlur, true);


function onAddContactFormSubmit(e){
    e.preventDefault();
    submitForm();
}
function onRemoveIconClick(e){
    const del = e.target;
    if(del.contains.classList('.icon')){
        tableBody.deleteRow(0);
    }   
}

function onNameInputBlur(){
    const name = {name: nameFld.value};
    name.trim();
    if(name = ''){
        changeInputState(e.target);
    } 
}

function changeInputState(el){
    el.classList.toggle('error');
}

function onSurnameInputBlur(){

}

function onPhoneInputBlur(){

}

function submitForm() {
    const rowData = {name: nameFld.value,
                    surname: surnameFld.value,
                    phone: phoneFld.value};
    
    addNewRow(rowData);
    resetForm();
}

function addNewRow(row) {
    const html = fieldTemplate1.replace('{{name}}', row.name);
    const html1 = fieldTemplate2.replace('{{surname}}', row.surname);
    const html2 = fieldTemplate3.replace('{{phone}}', row.phone);

    const newRow = tableBody.insertRow(0);

    newRow.innerHTML += html;
    newRow.innerHTML += html1;
    newRow.innerHTML += html2;    
}

function resetForm(){
    dataForm.reset();
}

