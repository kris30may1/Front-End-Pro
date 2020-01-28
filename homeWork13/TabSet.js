class TabSet {
    constructor(el, config) {
        this.el = el;
        this.init();
    }
    
    static TAB_CONTAINER_CLASS = 'nav';
    static TAB_ITEM_CLASS = 'nav-item';
    static TAB_ITEM_LINK_CLASS = 'nav-link';
    static TAB_ITEM_CONTENT_CLASS = 'nav-content';

    init() {
        this.bindClasses();
    }

    bindClasses() {
        this.el.classList.add(TabSet.TAB_CONTAINER_CLASS);
        Array.prototype.forEach.call(this.el.children, itemEl => {
            itemEl.classList.add(TabSet.TAB_ITEM_CLASS);
            itemEl.children[0].classList.add(TabSet.TAB_ITEM_LINK_CLASS);
            itemEl.children[1].classList.add(TabSet.TAB_ITEM_CONTENT_CLASS);
        }) 
    }

    bindCallbacks() {
        this.el.addEventListener('click', this.onTabClick.bind(this));
    }

    onTabClick(e) {
        
    }
}