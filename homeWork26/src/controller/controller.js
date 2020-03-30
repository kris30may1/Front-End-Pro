'use strict'
import { CONTACTS_URL } from '../config'
import contactsCollection from '../model/collection';
import ListView from '../view/list';
import TableView from '../view/html-template';

export default class Controller {
    constructor() {
        this.collection = new contactsCollection(CONTACTS_URL);
        this.tableView = new TableView({
            onSave: data => {
                this.collection.addContact(data).then(() => this.renderData());
            }
        });
        this.listView = new ListView({
            onDelete: id => {
                this.collection.deleteContact(id).then(() => this.renderData());
            },
            onEdit: id => {
                this.collection
                    .getContact(id)
                    .updateContact()
                    .then(() => this.renderData());
            }
        })

        this.container = document.querySelector('#root');

        this.container.append(this.tableView.el);

        this.refreshData();
    }

    refreshData() {
        this.collection.fetch().then(() => this.renderData());
    }

    renderData() {
        this.listView.renderContactList(this.collection.list);
        console.log(this.collection.list);
    }

    
}