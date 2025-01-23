import { Message } from './Message';

export class SendResult {
  client: any;
  result: any;
  _recipients: any;

  constructor(client: any, result: any) {
    this.client = client;
    this.result = result;
  }

  recipients() {
    let messages: any;

    if (!this._recipients) {
      this._recipients = {};
      messages = this.result.messages;
      for (let key in messages) {
        this._recipients[key.toLowerCase()] = new Message(this.client, messages[key]);
      }
    }

    return this._recipients;
  }

  size() {
    return this.recipients.length;
  }
}