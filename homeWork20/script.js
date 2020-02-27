'use strict'

const CONTACT_URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts';

const contactTemplate = $('#row-template').html();
const $contactForm = $('#contact-form');
const $nameInput = $('#name-input');
const $surnameInput = $('#surname-input');
const $phoneInput = $('#phone-input');
const $emailInput = $('#email-input');
const $dateInput = $('#datepicker');
const $tableBody = $('#table-body');
const $submitFormBtn = $('#submit-form-btn');

let dialog;
let contacts = [];

$submitFormBtn.on('click', onAddContactBtnClick);
$tableBody.on('click', '.delete', onDeleteIconClick);
$tableBody.on('click', '.edit', onEditIconClick);

init();

function onAddContactBtnClick() {
    initCreateContactDialog();
    initDatePicker();
    dialog.dialog('open');
}

function onDeleteIconClick(e) {
    const $el = $(e.target);
    const $contact = $el.parent().parent();
    const id = $contact.data('id');
    deleteContact(id);
    $contact.remove();
}

function onEditIconClick(e) {
    const $el = $(e.target);
    const id = getElementId($el);
    const contact = findContactById(id);
    initEditContactDialog(id, $el);
    initDatePicker();
    dialog.dialog('open');
    setDataInInputs(contact);
}

function findContactById(id) {
    return contacts.find(el => el.id == +id);
}

function getElementId($el) {
    return $el.parent().parent().data('id');
}

function setDataInInputs(contact) {
    $nameInput.val(contact.name);
    $surnameInput.val(contact.surname);
    $phoneInput.val(contact.phone);
    $emailInput.val(contact.email);
    $dateInput.val(contact.date);
} 

function updateUser(id, $el) {
    fetch(`${CONTACT_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
    
    let contact = findContactById(id);
    contact = getInputsValues();
    console.log(contact);
    console.log(contacts);
    contact = generateContactHtml(contact);
    console.log(contact);
    $el.parent().parent().replaceWith(contact);
}

function init() {
    getContacts();
}

function initCreateContactDialog() {
    dialog = $('#dialog-form').dialog({
        autoOpen: false,
        height: 500,
        width: 450,
        modal: true,
        buttons: {
            Create: function() {
                submitForm();
                dialog.dialog('close');
            },
            Cancel: function() {
                dialog.dialog('close');
            }
        },
        close: function() {
            $contactForm[0].reset();
        }
    });
}

function initEditContactDialog(id, $el) {
    dialog = $('#dialog-form').dialog({
        autoOpen: false,
        height: 500,
        width: 450,
        modal: true,
        buttons: {
            'Save Changes': function() {
                updateUser(id, $el);
                dialog.dialog('close');
            },
            Cancel: function() {
                dialog.dialog('close');
            }
        },
        close: function() {
            $contactForm[0].reset();
        }
    });
}

function initDatePicker() {
    $dateInput.datepicker({
        showButtonPanel: true
      });  
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

function submitForm() {
    // e.preventDefault();
    const contact = getInputsValues();

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

function deleteContact(id) {
    contacts = contacts.filter(contact => contact.id !== id);
    console.log(contacts);
    fetch(`${CONTACT_URL}/${id}`, {
        method: 'DELETE'
    }); 
}

function addContact(contact) {
    contacts.push(contact);
    contact = generateContactHtml(contact);
    $tableBody.append(contact);
    resetForm();
}

function getInputsValues() {
    const obj = {name: $nameInput.val(),
            surname: $surnameInput.val(),
            phone: $phoneInput.val(),
            email: $emailInput.val(),
            date: $dateInput.val()
        };
    return obj;
}

function renderContacts(data) {
    $tableBody.html(data.map(generateContactHtml).join('\n'));
}

function generateContactHtml(contact) {
    return contactTemplate
        .replace('{{id}}', contact.id)
        .replace('{{name}}', contact.name)
        .replace('{{surname}}', contact.surname)
        .replace('{{phone}}', contact.phoone)
        .replace('{{email}}', contact.email)
        .replace('{{date}}', contact.date);
}

function resetForm() {
    $contactForm[0].reset();
}