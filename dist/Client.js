"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const axios_1 = require("axios");
class Client {
    constructor(host, serverKey) {
        this.host = host;
        this.serverKey = serverKey;
    }
    makeRequest(controller, action, parameters) {
        return axios_1.default.post(`https://${this.host}/api/v1/${controller}/${action}`, parameters, {
            headers: {
                'Content-Type': 'application/json',
                'X-Server-API-Key': this.serverKey
            }
        }).then(response => {
            if (response.data.status === 'success') {
                return response.data.data;
            }
            else {
                throw response.data.data;
            }
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map