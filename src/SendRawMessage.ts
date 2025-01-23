import { SendResult } from './SendResult';

export class SendRawMessage {
  attributes: any;
  client: any;

  constructor(client: any) {
    this.attributes = {};
    this.client = client;
  }

  mailFrom(address: string) {
    this.attributes.mail_from = address;
  }

  rcptTo(address: string) {
    this.attributes.rcpt_to = (this.attributes.rcpt_to || []);
    this.attributes.rcpt_to.push(address);
  }

  data(content: string) {
    this.attributes.data = Buffer.from(content, 'base64');
  }

  send(callback: any) {
    return this.client.makeRequest('send', 'raw', this.attributes)
      .then((result: any) => {
        return new SendResult(this.client, result);
      });
  }
}