import { VirtualTimeScheduler } from "rxjs";

export default class Message {
  constructor() {
    this.list = document.querySelector('.messages_list');
  }

  render(email, text, time) {
    this.email = email.length <= 20 ? email : `${email.substr(0, 20)}...`;
    this.text = text.length <= 15 ? text : `${text.substr(0, 15)}...`;
    
    // this.messageItem = document.createElement('div');
    // this.messageItem.className = 'message';
    // this.contactEl = document.createElement('div');
    // this.contactEl.className = 'contact';
    // this.contactEl.textContent = email;
    // this.textEl = document.createElement('div');
    // this.textEl.className = 'text';
    // this.textEl.textContent = text;
    // this.timeEl = document.createElement('div');
    // this.timeEl.className = 'timestamp';
    // this.timeEl.textContent = time;
    // this.messageItem.append(this.contactEl, this.textEl, this.textEl);
    // this.list.insertAdjacentElement('afterbegin', this.messageItem);

    const newMsgHTML = `
    <div class="message">
      <div class="contact">${email}</div>
      <div class="text">${text}</div>
      <div class="timestamp">${time}</div>
    </div>`;
    this.list.insertAdjacentHTML('afterbegin', newMsgHTML);
  }
}