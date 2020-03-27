'use strict'

export default class FormView {
    constructor(config) {
        this.config = config;

        this.createElement();
        this.el.addEventListener('submit', this.onSubmit.bind(this));
        this.nameInput = this.el.querySelector('#name-input');
        this.surnameInput = this.el.querySelector('#surname-input');
        this.emailInput = this.el.querySelector('#email-input');
    }

    onSubmit(e) {
        e.preventDefault();
        this.config.onSave({
            name: this.nameInput.value,
            surname: this.surnameInput.value,
            email: this.emailInput
        });
    }

    createElement() {
        this.el = document.createElement('form');
        this.el.classList = 'form';
        this.el.id = 'contact-form';
        this.el.innerHTML = `
        <tr>
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
            <button type="submit" id="add-btn">Add</button>
        </th>
    </tr>
    `;

    console.log('form is created')
    }

    
}