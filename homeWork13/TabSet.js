class TabSet {
    constructor(el) {
        this.el = el;
        this.init();
    }
    
    static TAB_HEADER_CLASS = 'header'; //nav
    static TAB_CONTENT_CLASS = 'content'; //nav-item
    // static TAB_ITEM_LINK_CLASS = 'nav-link';
    // static TAB_ITEM_CONTENT_CLASS = 'nav-content';
    static TAB_HEADER_ITEM = 'header-item';
    static TAB_HEADER_ICONS = 'header-icon';
    static TAB_CONTENT_ITEM = 'content-item';

    init() {
        this.bindClasses();
        this.createEl();
        this.moveEl();
        // this.removeEl();
    }

    bindClasses() {
        Array.prototype.forEach.call(this.el.children, itemEl => {
            itemEl.children[0].classList.add(
                TabSet.TAB_HEADER_ITEM
            );
            itemEl.children[1].classList.add(
                TabSet.TAB_CONTENT_ITEM
            );
        });
    }

    createEl() {
        const divHeader = document.createElement('div');
        const divContent = document.createElement('div')
        divHeader.classList.add(TabSet.TAB_HEADER_CLASS);
        divContent.classList.add(TabSet.TAB_CONTENT_CLASS);
        this.el.appendChild(divHeader);
        this.el.appendChild(divContent);
    }

    moveEl() {
        let arr1 = document.querySelectorAll('.header-item');
        for (let i = 0; i < arr1.length; i++) {
            document.querySelector('.header').appendChild(arr1[i]);
        }

        let arr2 = document.querySelectorAll('.content-item');
        for (let i = 0; i < arr2.length; i++) {
            document.querySelector('.content').appendChild(arr2[i]);
        }

        document.querySelector('.header').appendChild(document.querySelector('.arrow-icon'));
    }

    bindCallbacks() {
        this.el.addEventListener('click', this.onTabClick.bind(this));
    }

    onTabClick(e) {
        
    }

    // removeEl() {
    //     for(let i = 0; i < 2; i++) {
    //         this.el.removeChild(this.el.children[i]);
    //     }
    // }
}

    