'use strict'

export default class contactsCollection {
    constructor(url) {
        this.url = url;
        this.list = [];

        this.setData = this.setData.bind(this);

        console.log('collection', url);
    }

    fetch() {
        console.log('fetching');
        return this.fetch(this.url)
            .then(resp => resp.json())
            .then(this.setData)
            .then(console.log(list))
    }

    setData(list) {
        return (this.list = list.map(el => new ToDoModel(this.url, el)));
    }

    deleteContact(id) {
        const model = this.get(id);
        return model
            .delete()
            .then(() => (this.list = this.list.filter(item => item !== model)));
    }

    getContact(id) {
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
            .then(res => res.json())
            .then(data => this.list.push(new contactModel(this.url, data)));
    }
}