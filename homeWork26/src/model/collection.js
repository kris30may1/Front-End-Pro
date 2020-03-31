'use strict'

import contactModel from "../model/model";

export default class contactsCollection {
    constructor(url) {
        this.url = url;
        this.list = [];

        this.setData = this.setData.bind(this);
    }

    fetch() {
        return fetch(this.url)
            .then(resp => resp.json())
            .then(this.setData)
    }

    setData(list) {
        return (this.list = list.map(el => new contactModel(this.url, el)));
    }

    deleteContact(id) {
        const model = this.get(id);
        return model
            .delete()
            .then(() => (this.list = this.list.filter(item => item !== model)));
    }

    updateContact(data) {
        const model = this.get(data.id);
        return model
            .update(data)
    }

    get(id) {
        return this.list.find(item => item.id == id);
    }

    addContact(data) {
        return fetch(`${this.url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(data => this.list.push(new contactModel(this.url, data)));
    }
}