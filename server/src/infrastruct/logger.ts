import MORGAN = require('morgan');
export class Logger{
    app:any;
    morgan = MORGAN;
    constructor(app){
        this.app = app;
        this.init();
    }

    private init(){
        this.morgan('dev');

        this.morgan.token('id', req => {
            return req['id'];
        });

        let loggerFormat = ':id :date[clf] :method :url :status :response-time ms - :res[content-length] | :referrer :user-agent :req[header]';
        this.app.use(this.morgan(loggerFormat, {
            skip: function (req, res) {
                return res.statusCode >= 400
            },
            stream: process.stdout
        }));

        this.app.use(this.morgan(loggerFormat, {
            skip: function (req, res) {
                return res.statusCode < 400
            },
            stream: process.stderr
        }));

    }

}