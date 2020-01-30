'use strict'

class TabSet {
    constructor(el, config) {
        this.config = config || {
            hideAll: true}
        this.el = el;
        this.init();
    }
    
    static TAB_HEADER_CLASS1 = 'nav'; //nav
    static TAB_HEADER_CLASS2 = 'nav-tabs'; //nav
    static TAB_CONTENT_CLASS = 'content'; //nav-item
    static TAB_HEADER_ITEM = 'nav-item'; //nav-link
    static TAB_HEADER_ICONS = 'nav-icon';
    static TAB_CONTENT_ITEM = 'content-item'; //nav-content
    static CONTENT_ACTIVE_CLASS = 'active';
    static TAB_ACTIVE_CLASS = 'active';
    static ARROW_CLASS = 'mat-icon';

    init() {
        this.bindClasses();
        this.createEl();
        this.moveEl();
        this.defaultState();
        this.bindCallbacks();
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
        divHeader.classList.add(TabSet.TAB_HEADER_CLASS1);
        divHeader.classList.add(TabSet.TAB_HEADER_CLASS2);
        divContent.classList.add(TabSet.TAB_CONTENT_CLASS);
        this.el.appendChild(divHeader);
        this.el.appendChild(divContent);
    }

    moveEl() {
        let headerItems = document.querySelectorAll('.nav-item');
        for (let i = 0; i < headerItems.length; i++) {
            document.querySelector('.nav').appendChild(headerItems[i]);
        }

        let contentItems = document.querySelectorAll('.content-item');
        for (let i = 0; i < contentItems.length; i++) {
            document.querySelector('.content').appendChild(contentItems[i]);
        }

        document.querySelector('.nav').appendChild(document.querySelector('.arrow-icon'));
    }

    defaultState() {
        document.querySelector('.content').children[0].classList.add('active');
        document.querySelector('.nav').children[0].classList.add('active');
    }

    bindCallbacks() {
        document.querySelector('.nav').addEventListener('click', this.onTabClick.bind(this));
        document.querySelector('.arrow-icon').addEventListener('click', this.onArrowClick.bind(this));
    }

    onTabClick(e) {
        switch (true) {
            case e.target.classList.contains(
                TabSet.TAB_HEADER_ITEM
            ):
                this.onTitleClick(e.target);
                break;
        }
    } 
    
    onArrowClick(e) {
        switch (true) {
            case e.target.classList.contains(
                TabSet.ARROW_CLASS
            ):
                this.onArrowsClick(e.target);
                break;
        }
    }

    onArrowsClick(currentArrow){
        
    }

    onTitleClick(itemElem) {
        const isCurrentVisible = this.isVisible(itemElem);

        if (this.config.hideAll) {
            this.hideAll();
        }

        if (!isCurrentVisible) {
            this.show(itemElem);
        } else {
            this.hide(itemElem);
        }
    }

    isVisible(itemElem) {
        return itemElem.classList.contains(TabSet.TAB_ACTIVE_CLASS);
    }

    show(itemElem) {
        itemElem.classList.add(TabSet.TAB_ACTIVE_CLASS);
    }

    hide(itemElem) {
        itemElem.classList.remove(TabSet.TAB_ACTIVE_CLASS);
    }

    isVisible(itemElem) {
        return itemElem.classList.contains(TabSet.TAB_ACTIVE_CLASS);
    }

    hideAll() {
        const visibleElements = this.el.querySelectorAll(
            '.' + TabSet.TAB_ACTIVE_CLASS
        );

        Array.prototype.forEach.call(visibleElements, this.hide.bind(this));
    }

    prev() {

    }

    next() {

    }
    // removeEl() {
    //     for(let i = 0; i < 2; i++) {
    //         this.el.removeFirstChild(this.el.children[i]);
    //     }
    // }
}

    