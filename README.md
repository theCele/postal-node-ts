# Postal for Node

This library is a typescript rewrite of [Postal Node](https://github.com/postalserver/postal-node).

## Installation

Install the library using [NPM](https://www.npmjs.com/):

```
$ npm install postal-node-ts --save
```

## Usage

Sending an email is very simple. Just follow the example below. Before you can
begin, you'll need to login to your installation's web interface and generate
new API credentials.

```javascript
import { Client, SendMessage, SendRawMessage, SendResult } from 'postal-node-ts'

console.log(Client);
console.log(SendMessage);
console.log(SendRawMessage);

const client = new Client('example.com', 'your-api-key');
const message = new SendMessage(client);

// Add some recipients
message.to('cvetko@bspec.io');
message.from('c.david@wiseindustries-app.com');

message.subject('Hi there!');

message.plainBody('Hello world!');
message.htmlBody('<p>Hello world!</p>');

message.send().then((result: SendResult) => {
    console.log(result.result);
})
.catch((error: any) => {
  console.error(error);
});
```