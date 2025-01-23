import { Client, SendMessage, SendRawMessage } from './index'
import { SendResult } from './SendResult';

console.log(Client);
console.log(SendMessage);
console.log(SendRawMessage);

const client = new Client('wiseindustries-cloud.com', 'your-api-key');
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
