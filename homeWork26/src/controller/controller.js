'use strict'
import { CONTACTS_URL } from '../config'
import contactsCollection from '../model/collection';
import ListView from '../view/list';

export default class Controller {
    constructor() {
        this.collection = new contactsCollection(CONTACTS_URL);
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
    }
}