import { SendResult } from './SendResult';
export declare class SendMessage {
    attributes: any;
    client: any;
    constructor(client: any);
    to(address: string): void;
    cc(address: string): void;
    bcc(address: string): void;
    from(address: string): void;
    sender(address: string): void;
    subject(_subject: string): void;
    tag(_tag: string): void;
    replyTo(_replyTo: string): void;
    plainBody(content: string): void;
    htmlBody(content: string): void;
    header(key: string, value: string): void;
    attach(filename: string, contentType: string, data: string): void;
    send(): Promise<SendResult>;
}
