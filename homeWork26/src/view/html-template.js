'use strict'

export default class tableView {
    constructor(config) {
        this.config = config;
        this.createElement();
        this.el.addEventListener('submit', this.onSubmit.bind(this));
        this.idInput = this.el.querySelector('#id');
        this.nameInput = this.el.querySelector('#name');
        this.surnameInput = this.el.querySelector('#surname');
        this.emailInput = this.el.querySelector('#email');
        this.inputs = this.el.querySelectorAll('input');

    }

    onSubmit(e) {
        e.preventDefault(); 
        const id = this.idInput.getAttribute('value'); 
        console.log(id);    
        if (id === '') {
            this.config.onSave({
                name: this.nameInput.value,
                surname: this.surnameInput.value,
                email: this.emailInput.value
        }) 
    } else {
        this.config.onUpdate({
            id: this.idInput.value,
            name: this.nameInput.value,
            surname: this.surnameInput.value,
            email: this.emailInput.value
        })
    }
        
        this.idInput.value = '';
        this.resetContactForm();
    }

    resetContactForm() {
        this.el.reset();
    }

    fillForm(user) {
        Array.prototype.forEach.call(this.inputs, input => {
            input.value = user[input.name]
        });
    }

    createElement() {
        this.el = document.createElement('form');
        this.el.id = 'contact-form';

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
                    <input type="hidden" name="id" class="form-input" id="id" value=""/>
                    <th>
                        <input type="text" name="name" class="form-input" id="name"/>
                    </th>
                    <th>
                        <input type="text" name="surname" class="form-input" id="surname"/>
                    </th>
                    <th>
                        <input type="text" name="email" class="form-input" id="email"/>
                    </th>
                    <th>
                        <button type="submit" id="add-btn">Save</button>
                    </th>
                </tr>
        </tfoot>
    </table>`
    }

    
}

