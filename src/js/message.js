export default class Message {
  constructor() {
    this.list = document.querySelector('.messages_list');
  }

  render(email, text, time) {
    this.email = email.length <= 20 ? email : `${email.substr(0, 20)}...`;
    this.text = text.length <= 15 ? text : `${text.substr(0, 15)}...`;

    const newMsgHTML = `
    <div class="message">
      <div class="contact">${email}</div>
      <div class="text">${text}</div>
      <div class="timestamp">${time}</div>
    </div>`;
    this.list.insertAdjacentHTML('afterbegin', newMsgHTML);
  }
}
