export declare class Client {
    host: string;
    serverKey: string;
    constructor(host: string, serverKey: string);
    makeRequest(controller: string, action: string, parameters: any): Promise<any>;
}
