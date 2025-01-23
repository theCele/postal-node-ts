
import { Client } from './Client';

export class Message {
  client: Client;
  attributes: any;

  constructor(client: Client, attributes: any) {
    this.client = client;
    this.attributes = attributes;
  }

  id() {
    return this.attributes.id;
  }

  token() {
    return this.attributes.token;
  }
}
