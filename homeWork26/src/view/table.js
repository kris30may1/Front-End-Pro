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
        thead.appendChild(tr);
        
        const th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'First Name';

        const th1 = document.createElement('th');
        tr.appendChild(th1);
        th1.innerHTML= 'Last Name';

        const th2 = document.createElement('th');
        tr.appendChild(th2);
        th2.innerHTML = 'Email';

        const th3 = document.createElement('th');
        tr.appendChild(th3);
        th3.innerHTML = 'Action';

    }
}