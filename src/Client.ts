import axios from 'axios';

export class Client {
  host: string;
  serverKey: string;

  constructor(host: string, serverKey: string) {
    this.host = host;
    this.serverKey = serverKey;
  }

  makeRequest(controller: string, action: string, parameters: any) {
    return axios.post(`https://${this.host}/api/v1/${controller}/${action}`, parameters, {
      headers: {
        'Content-Type': 'application/json',
        'X-Server-API-Key': this.serverKey
      }
    }).then(response => {
      if (response.data.status === 'success') {
        return response.data.data;
      } else {
        throw response.data.data;
      }
    });
  }
}