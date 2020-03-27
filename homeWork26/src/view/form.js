'use strict'

export default class FormView {
    constructor(config) {
        this.config = config;

        this.createElement();
        this.el.addEventListener('click', this.onClick.bind(this));
        this.nameInput = this.el.querySelector('#name-input');
        this.surnameInput = this.el.querySelector('#surname-input');
        this.emailInput = this.el.querySelector('#email-input');
    }

    onClick() {
        this.config.onSave({
            name: this.nameInput.value,
            surname: this.surnameInput.value,
            email: this.emailInput
        });
    }

    createElement() {
        this.el = document.createElement('tr');
        this.el.innerHTML = `
        <th>
            <input type="text" class="form-input" name="First Name" id="name-input"/>
        </th>
        <th>
            <input type="text" class="form-input" name="Last Name" id="surname-input"/>
        </th>
        <th>
            <input type="text" class="form-input" name="Email" id="email-input"/>
        </th>
        <th>
            <button type="button" id="add-btn">Add</button>
        </th>`;
    }

    
}