import MORGAN = require('morgan');
import bunyan = require('bunyan');
import {logLevels} from '../enums/log-security-levels';
export class Logger{
    app:any;
    morgan = MORGAN;
    bunyan = bunyan;
    log:any;
    constructor(app){
        this.app = app;
        this.init();
    }

    public info(message: String){
        this.log.info({
            message: message,
            level: logLevels.info
        })
    }
    public warn(message:Object){
        this.log.warn(message)
    }

    private init(){
        this.morgan('dev');
        this.log = this.bunyan.createLogger({
            name: 'LeniGraphics Overlay System';
        })
        
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