'use strict'

export default class ListView {
    constructor(config) {
        this.config = config;
    }

    renderContactList(data) {
        this.el = document.querySelector('tbody');
        this.el.innerHTML = data.map(this.renderItem).join('\n');

        this.el.addEventListener('click', this.onListClick.bind(this));
    }

    onListClick(e) {
        switch(true) {
            case e.target.classList.contains('delete-btn'):
                this.config.onDelete(e.target.parentNode.parentNode.dataset.id);
                break;
            case e.target.classList.contains('edit-btn'):
                this.config.onEdit(e.target.parentNode.parentNode.dataset.id);
                break;
        }
    }

    renderItem(item) {
        return  `<tr data-id='${item.id}'>
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.email}</td>
        <td>
            <span class="button edit-btn">Edit</span>
            <span class="button delete-btn">Delete</span>
        </td> 
    </tr>`;
    }
}