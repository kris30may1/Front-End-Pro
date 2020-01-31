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
        const divContent = document.createElement('div');
        divHeader.classList.add(TabSet.TAB_HEADER_CLASS1);
        divHeader.classList.add(TabSet.TAB_HEADER_CLASS2);
        divContent.classList.add(TabSet.TAB_CONTENT_CLASS);
        this.el.appendChild(divHeader);
        this.el.appendChild(divContent);
    }

    moveEl() {
        const divHeader = document.querySelector('.nav'); 
        let headerItems = document.querySelectorAll('.nav-item');
        for (let i = 0; i < headerItems.length; i++) {
            divHeader.appendChild(headerItems[i]);
        }

        let contentItems = document.querySelectorAll('.content-item');
        for (let i = 0; i < contentItems.length; i++) {
            document.querySelector('.content').appendChild(contentItems[i]);
        }

        divHeader.appendChild(document.querySelector('.arrow-icon'));
    }

    defaultState() {
        document.querySelector('.content').children[0].classList.add(TabSet.TAB_ACTIVE_CLASS);
        document.querySelector('.nav').children[0].classList.add(TabSet.TAB_ACTIVE_CLASS);
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
        if(currentArrow.classList.contains('next')){
            this.next();
        } else {
            this.prev();
        }       
    }

    prev() {
        const activeElem = document.querySelector('.active');
        const divHeader = document.querySelector('.nav');
        const divContent = document.querySelector('.content');
        
        const activeElIndex = Array.prototype.indexOf.call(divHeader.childNodes, activeElem);    
        
        if (activeElIndex == 0 || 1) {
            divHeader.children[activeElIndex + 1].classList.add(
                TabSet.TAB_ACTIVE_CLASS);
            divContent.children[activeElIndex + 1].classList.add(
                TabSet.TAB_ACTIVE_CLASS);
        } else if (activeElIndex == 2) {
            divHeader.children[0].classList.add(
                TabSet.TAB_ACTIVE_CLASS);
            divContent.children[0].classList.add(
                TabSet.TAB_ACTIVE_CLASS);
        }

        divContent.children[activeElIndex].classList.remove(
            TabSet.TAB_ACTIVE_CLASS
            );
        this.hide(activeElem);
    }

    next() {
        const divContent = document.querySelector('.content');
        const activeElem = document.querySelector('.active');
        const divHeader = document.querySelector('.nav');
        
        const activeElIndex = Array.prototype.indexOf.call(divHeader.childNodes, activeElem);
              
        if (activeElIndex == 1 || 2) {
            divHeader.children[activeElIndex - 1].classList.add(
                TabSet.TAB_ACTIVE_CLASS);
            divContent.children[activeElIndex - 1].classList.add(
                TabSet.TAB_ACTIVE_CLASS);
        } else if (activeElIndex == 0) {
            divHeader.children[2].classList.add(
                TabSet.TAB_ACTIVE_CLASS);
            divContent.children[2].classList.add(
                TabSet.TAB_ACTIVE_CLASS);
        }

        divContent.children[activeElIndex].classList.remove(
            TabSet.TAB_ACTIVE_CLASS
            );
        this.hide(activeElem);
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
        const navIndex = Array.prototype.indexOf.call(itemElem.parentNode.childNodes, itemElem);
        console.log(navIndex);
        itemElem.classList.add(TabSet.TAB_ACTIVE_CLASS);
        document.querySelector('.content').children[navIndex].classList.add(
            TabSet.TAB_ACTIVE_CLASS
        );
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
}

    