import { SendResult } from './SendResult';

export class SendMessage {
  attributes: any;
  client: any;

  constructor(client: any) {
    this.attributes = {
      to: [],
      cc: [],
      bcc: [],
      headers: {},
      attachments: []
    };
    this.client = client;
  }

  to(address: string) {
    this.attributes.to.push(address);
  }

  cc(address: string) {
    this.attributes.cc.push(address);
  }

  bcc(address: string) {
    this.attributes.bcc.push(address);
  }

  from(address: string) {
    this.attributes.from = address;
  }

  sender(address: string) {
    this.attributes.sender = address;
  }

  subject(_subject: string) {
    this.attributes.subject = _subject;
  }

  tag(_tag: string) {
    this.attributes.tag = _tag;
  }

  replyTo(_replyTo: string) {
    this.attributes.reply_to = _replyTo;
  }

  plainBody(content: string) {
    this.attributes.plain_body = content;
  }

  htmlBody(content: string) {
    this.attributes.html_body = content;
  }

  header(key: string, value: string) {
    this.attributes.headers[key] = value;
  }

  attach(filename: string, contentType: string, data: string) {
    let attachment = {
      content_type: contentType,
      data: Buffer.from(data).toString('base64'),
      name: filename
    };
    this.attributes.attachments.push(attachment);
  }

  send(): Promise<SendResult> {
    return this.client.makeRequest('send', 'message', this.attributes)
      .then((result: any) => {
        return new SendResult(this.client, result);
      });
  }
}