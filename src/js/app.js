import Dom from './Dom';

export default class Widget {
  constructor(element) {
    this.element = element;
    this.chat = this.element.querySelector('.chat');

    this.clickListener();
    this.transitionListener();
  }

  clickListener() {
    this.element.addEventListener('click', (e) => this.constructor.clickHandler(e));
  }

  static clickHandler(e) {
    if (e.target.classList.contains('button')) {
      Dom.showButton(e.target);
      Dom.showChat();
    }
  }

  transitionListener() {
    this.chat.addEventListener('transitionend', (e) => Dom.autoSize(e.target));
  }
}

const widget = new Widget(document);
