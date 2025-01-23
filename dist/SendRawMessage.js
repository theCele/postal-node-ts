"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendRawMessage = void 0;
const SendResult_1 = require("./SendResult");
class SendRawMessage {
    constructor(client) {
        this.attributes = {};
        this.client = client;
    }
    mailFrom(address) {
        this.attributes.mail_from = address;
    }
    rcptTo(address) {
        this.attributes.rcpt_to = (this.attributes.rcpt_to || []);
        this.attributes.rcpt_to.push(address);
    }
    data(content) {
        this.attributes.data = Buffer.from(content, 'base64');
    }
    send(callback) {
        return this.client.makeRequest('send', 'raw', this.attributes)
            .then((result) => {
            return new SendResult_1.SendResult(this.client, result);
        });
    }
}
exports.SendRawMessage = SendRawMessage;
//# sourceMappingURL=SendRawMessage.js.map