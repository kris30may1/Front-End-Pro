'use strict'
import { CONTACTS_URL } from '../config'
import contactsCollection from '../model/collection';
import ListView from '../view/list';
import FormView from '../view/form';
import TableView from '../view/table';

export default class Controller {
    constructor() {
        this.collection = new contactsCollection(CONTACTS_URL);
        this.tableView = new TableView();
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

        this.formView = new FormView({
            onSave: data => {
                this.collection.addContact(data).then(() => this.renderData());
            }
        });

        this.container = document.querySelector('#root');

        this.container.append(this.tableView.el);
        this.tableView.el.append(this.formView.el);
        console.log('table is added');

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