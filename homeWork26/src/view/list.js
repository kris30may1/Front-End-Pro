'use strict'

export default class ListView {
    constructor(config) {
        this.config = config;
        this.createElement();
    }

    createElement() {
        this.el = document.createElement('tbody');
        this.el.id = 'table-body';
        this.el.appendChild('thead').id = 'name-cell';
        this.el.appendChild('tbody').id = 'surname-cell';
        this.el.appendChild('tfoot').id = 'phone-cell';
    }

    renderContactList(data) {
        this.el.innerHTML = data.map(this.renderItem).join('\n');
    }

    renderItem(item) {
        return  `<tr data-id='${item.id}'>
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.email}</td>
        <td>
            <span class="button"></span>
            <span class="icon">X</span>
        </td> 
    </tr>`;
    }
}