import { Client } from './Client';
export declare class Message {
    client: Client;
    attributes: any;
    constructor(client: Client, attributes: any);
    id(): any;
    token(): any;
}
