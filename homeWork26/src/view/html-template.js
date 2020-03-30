'use strict'

export default class tableView {
    constructor(config) {
        this.config = config;
        this.createElement();
        this.el.addEventListener('submit', this.onSubmit.bind(this));
        this.nameInput = this.el.querySelector('#name');
        this.surnameInput = this.el.querySelector('#surname');
        this.emailInput = this.el.querySelector('#email');
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('submit');
        this.config.onSave({
            name: this.nameInput.value,
            surname: this.surnameInput.value,
            email: this.emailInput.value
        });
    }

    createElement() {
        this.el = document.createElement('form');
        this.id = 'contact-form';

        this.el.innerHTML = `<table class="table u-full-width" id="contact-table">
        <thead>
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody id="table-body">
            
        </tbody>
        <tfoot id="table-footer">
                <tr>
                    <th>
                        <input type="text" class="input-name" id="name"/>
                    </th>
                    <th>
                        <input type="text" class="input-surname" id="surname"/>
                    </th>
                    <th>
                        <input type="text" class="input-phone" id="email"/>
                    </th>
                    <th>
                        <button type="submit" id="add-btn">Add</button>
                    </th>
                </tr>
        </tfoot>
    </table>`
    }

    
}

