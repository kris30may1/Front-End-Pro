'use strict'

const CONTACT_URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';

const nameFld = document.querySelector('#name');
const surnameFld = document.querySelector('#surname');
const emailFld = document.querySelector('#email');
const contactTable = document.querySelector('#contactTable');
const tableBody = document.querySelector('#tableBody');
const dataForm = document.querySelector('#dataForm');
const contactTemplate = document.querySelector('#rowTemplate').innerHTML;
const fieldTemplate1 = document.querySelector('#fldsTemplate1').innerHTML;
const fieldTemplate2 = document.querySelector('#fldsTemplate2').innerHTML;
const fieldTemplate3 = document.querySelector('#fldsTemplate3').innerHTML;

let contacts = [];

document.querySelector('#dataForm').addEventListener('submit', onAddContactFormSubmit);
tableBody.addEventListener('click', onRemoveIconClick);

init();


function onAddContactFormSubmit(e){
    e.preventDefault();
    submitForm();
}

function onRemoveIconClick(e){
    if(e.target.classList.contains('icon')){
        deleteContact(e.target.parentNode.parentNode.dataset.id);
    }   
}

function init() {
    getContacts();
}

function getContacts() {
    return fetch(CONTACT_URL) 
        .then(resp => resp.json())
        .then(setContacts)
        .then(renderContacts);
}

function setContacts(data) {
    return (contacts = data);
}

function renderContacts(data) {
    tableBody.innerHTML = data.map(generateContactHtml).join('\n');
}

function generateContactHtml(contact) {
    return contactTemplate
        .replace('{{id}}', contact.id)
        .replace('{{name}}', contact.name)
        .replace('{{surname}}', contact.surname)
        .replace('{{email}}', contact.email);
}

function deleteContact(id) {
    fetch(`${CONTACT_URL}/${id}`, {
        method: 'DELETE'
    });
    contacts = contacts.filter(contact => contact.id !== id);
    renderContacts(contacts);
}

function submitForm() {
    const contact = {name: nameFld.value,
                    surname: surnameFld.value,
                    email: emailFld.value};

    fetch(CONTACT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
        .then(resp => resp.json())
        .then(addContact);
}

function addContact(contact) {
        contacts.push(contact);

        renderContacts(contacts);
        resetForm();
}

function resetForm(){
    dataForm.reset();
}