"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendResult = void 0;
const Message_1 = require("./Message");
class SendResult {
    constructor(client, result) {
        this.client = client;
        this.result = result;
    }
    recipients() {
        let messages;
        if (!this._recipients) {
            this._recipients = {};
            messages = this.result.messages;
            for (let key in messages) {
                this._recipients[key.toLowerCase()] = new Message_1.Message(this.client, messages[key]);
            }
        }
        return this._recipients;
    }
    size() {
        return this.recipients.length;
    }
}
exports.SendResult = SendResult;
//# sourceMappingURL=SendResult.js.map