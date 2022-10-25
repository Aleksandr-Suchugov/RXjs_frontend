import { interval } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import Message from './message';

export default class API {
  constructor() {
    this.message = new Message();
  }

  stream() {
    this.newMsg$ = ajax.getJSON('https://asuch-rxjs.herokuapp.com/messages/unread');
    return interval(4000).pipe(
      switchMap((value) => this.newMsg$),
      map((value) => value.messages),
    );
  }

  init() {
    this.stream$ = this.stream();
    this.stream$.subscribe((messages) => {
      messages.forEach((msg) => {
        this.message.render(msg.from, msg.subject, msg.received);
      });
    });
  }
}
