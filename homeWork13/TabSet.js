class TabSet {
    constructor(el, config) {
        this.el = el;
        this.init();
    }

    static TAB_CONTAINER_CLASS = 'tab-container';
    static TAB_ITEM_CLASS = 'tab-item';
    static TAB_ITEM_CONTENT_CLASS = 'tab-item-content';

    init() {
        this.bindClasses();
    }

    bindClasses() {
        this.el.classList.add(TabSet.TAB_CONTAINER_CLASS);
        Array.prototype.forEach.call(this.el.children, itemEl => {
            itemEl.classList.add(TabSet.TAB_ITEM_CLASS);
        }) 
    }

    bindCallbacks() {
        this.el.addEventListener('click', this.onTabClick.bind(this));
    }

    onTabClick(e) {
        
    }
}