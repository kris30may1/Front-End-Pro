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
            },
            onUpdate: data => {
                this.collection.updateContact(data).then(() => this.refreshData());
            }
        });
            
        this.listView = new ListView({
            onDelete: id => {
                this.collection.deleteContact(id).then(() => this.renderData());
            },
            onEdit: id => {
                const model = this.collection.get(id);  
                this.tableView.fillForm(model);
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