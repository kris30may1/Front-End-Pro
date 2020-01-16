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

function onAddContactFormSubmit(e){
    e.preventDefault();
    submitForm();
}

function onRemoveBtnClick(){
}

function submitForm() {
    const nameCell = {name: nameFld.value};
    const surnameCell = {surname: surnameFld.value};
    const phoneCell = {phone: phoneFld.value};
    
    addNewRow(nameCell, surnameCell, phoneCell);
    resetForm();
}

function addNewRow(row1, row2, row3) {
    const html = fieldTemplate1.replace('{{name}}', row1.name);
    const html1 = fieldTemplate2.replace('{{surname}}', row2.surname);
    const html2 = fieldTemplate3.replace('{{phone}}', row3.phone);

    const newRow = tableBody.insertRow(0);

    newRow.innerHTML += html;
    newRow.innerHTML += html1;
    newRow.innerHTML += html2;    
}

function htmlToElement(){

}

function resetForm(){
    dataForm.reset();
}