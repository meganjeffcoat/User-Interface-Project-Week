class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tab-content[data-tab='${this.data}'] `);
      this.tabItem = new TabItem(this.itemElement);
      
      this.element.addEventListener('click', () => {this.select()});
    };
  
    select() {
      const links = document.querySelectorAll('.tab-link');
  
      links.forEach( link => {link.classList.remove('selected-link')});
      this.element.classList.add('selected-link');
      
      this.tabItem.select();
    }
}
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll('.tab-content');
  
      items.forEach( item => {item.classList.remove('selected-content')});
      this.element.classList.add('selected-content');
    }
  }
  
  
  
  const links = document.querySelectorAll('.tab-link').forEach( link => new TabLink(link));
  // links[0].select();