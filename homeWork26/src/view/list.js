'use strict'

export default class ListView {
    constructor(config) {
        this.config = config;
        this.createElement();
    }

    createElement() {
        this.el = document.querySelector('tbody');
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