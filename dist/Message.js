"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    constructor(client, attributes) {
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
exports.Message = Message;
//# sourceMappingURL=Message.js.map