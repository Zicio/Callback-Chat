import Dom from './Dom';

export default class Widget {
  constructor(element) {
    this.element = element;

    this.clickListener();
  }

  clickListener() {
    this.element.addEventListener('click', (e) => this.constructor.clickHandler(e));
  }

  static clickHandler(e) {
    if (e.target.classList.contains('button')) {
      Dom.showButton(e.target);
      Dom.showChat();
      return;
    }
    if (e.target.classList.contains('chat__close')) {
      Dom.showChat();
    }
  }
}

const widget = new Widget(document);
