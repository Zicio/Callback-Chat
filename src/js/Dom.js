export default class Dom {
  constructor(element) {
    this.element = element;
  }

  static showButton(e) {
    e.classList.add('hidden');
    e.classList.remove('hover');
  }

  static showChat() {
    const chat = document.querySelector('.chat');
    if (chat.style.height === '') {
      chat.style.height = `${chat.scrollHeight}px`;
    } else {
      chat.style.height = `${chat.scrollHeight}px`;
      // window.getComputedStyle(chat, null).getPropertyValue("height");
      chat.style.height = '0';
    }
  }

  static autoSize(e) {
    if (e.style.height !== '0px') {
      e.style.height = 'auto';
    }
  }
}
