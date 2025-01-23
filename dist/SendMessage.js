"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessage = void 0;
const SendResult_1 = require("./SendResult");
class SendMessage {
    constructor(client) {
        this.attributes = {
            to: [],
            cc: [],
            bcc: [],
            headers: {},
            attachments: []
        };
        this.client = client;
    }
    to(address) {
        this.attributes.to.push(address);
    }
    cc(address) {
        this.attributes.cc.push(address);
    }
    bcc(address) {
        this.attributes.bcc.push(address);
    }
    from(address) {
        this.attributes.from = address;
    }
    sender(address) {
        this.attributes.sender = address;
    }
    subject(_subject) {
        this.attributes.subject = _subject;
    }
    tag(_tag) {
        this.attributes.tag = _tag;
    }
    replyTo(_replyTo) {
        this.attributes.reply_to = _replyTo;
    }
    plainBody(content) {
        this.attributes.plain_body = content;
    }
    htmlBody(content) {
        this.attributes.html_body = content;
    }
    header(key, value) {
        this.attributes.headers[key] = value;
    }
    attach(filename, contentType, data) {
        let attachment = {
            content_type: contentType,
            data: Buffer.from(data).toString('base64'),
            name: filename
        };
        this.attributes.attachments.push(attachment);
    }
    send() {
        return this.client.makeRequest('send', 'message', this.attributes)
            .then((result) => {
            return new SendResult_1.SendResult(this.client, result);
        });
    }
}
exports.SendMessage = SendMessage;
//# sourceMappingURL=SendMessage.js.map