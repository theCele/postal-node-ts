"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log(index_1.Client);
console.log(index_1.SendMessage);
console.log(index_1.SendRawMessage);
const client = new index_1.Client('wiseindustries-cloud.com', 'oKBhv15VC3sQbmvhdJ84LvDH');
const message = new index_1.SendMessage(client);
// Add some recipients
message.to('cvetko@bspec.io');
message.from('c.david@wiseindustries-app.com');
message.subject('Hi there!');
message.plainBody('Hello world!');
message.htmlBody('<p>Hello world!</p>');
message.send().then((result) => {
    console.log(result.result);
})
    .catch((error) => {
    console.error(error);
});
//# sourceMappingURL=test.js.map