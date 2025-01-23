export declare class SendRawMessage {
    attributes: any;
    client: any;
    constructor(client: any);
    mailFrom(address: string): void;
    rcptTo(address: string): void;
    data(content: string): void;
    send(callback: any): any;
}
