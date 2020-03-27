'use strict'

export default class ListView {
    constructor(config) {
        this.config = config;
    }

    renderContactList(data) {
        this.el = document.querySelector('tbody');
        this.el.innerHTML = data.map(this.renderItem).join('\n');
    }

    renderItem(item) {
        return  `<tr data-id='${item.id}'>
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.email}</td>
        <td>
            <span class="button">Edit</span>
            <span class="button">Delete</span>
        </td> 
    </tr>`;
    }
}