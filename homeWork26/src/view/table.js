export default class TableView {
    constructor(config) {
        this.config = config;
        this.createElement();
    }

    createElement() {
        this.el = document.createElement('table');
        this.el.className = 'u-full-width';
        
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tfoot = document.createElement('tfoot');

        this.el.appendChild(thead);
        this.el.appendChild(tbody);
        this.el.appendChild(tfoot);

        const tr = document.createElement('tr');
        thead.innerHTML = `<tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Action</th>
    </tr>`;
        
    }
}