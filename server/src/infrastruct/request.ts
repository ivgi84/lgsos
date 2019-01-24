const request = require('request');
export class RequestPromise {
    _request: any;

    static get call() {
        return request;
    }
    static get HTTPResponse() {
        return HTTPResponse;
    }
    constructor(public timeout: number , options?: any) {
        if (!timeout) {
            throw new Error('requestWithoutTimeoutNotSupported');
        }
        options = options || {};
        options.timeout = timeout;
        this._request = RequestPromise.call.defaults(options);
    }
    // @ts-ignore
    public call<T>(options: any ): RequestPromise<HTTPResponse<T>> {
        return new Promise((resolve) => {
            this._request(options , (error: Error, response: any, body: any) => {
                resolve(new RequestPromise.HTTPResponse(error, response, body))
            });
        });
    }
}

export class HTTPResponse<T> {
    public error: Error;
    public statusCode: number;
    public headers: {[key: string]: string};
    public body: T;
    constructor(err: Error , response: any, body: any) {
        if (err) {
            this.error = err;
        } else {
            this.statusCode = response.statusCode;
            this.body = <T>body;
            this.headers = response.headers;
        }
    }
}
