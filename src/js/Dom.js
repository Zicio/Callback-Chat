export default class Dom {
  constructor(element) {
    this.element = element;
  }

  static showButton(e) {
    e.classList.toggle('hidden');
    e.classList.toggle('hover');
  }

  static showChat(e) {
    const chat = document.querySelector('.chat');
    if (!chat.classList.contains('active')) {
      chat.classList.add('active');
      chat.classList.remove('disactive');
      return;
    }
    chat.classList.remove('active');
    chat.classList.add('disactive');
    const button = document.querySelector('.button');
    Dom.showButton(button);
  }
}
