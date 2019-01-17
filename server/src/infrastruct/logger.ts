const lodash = require("lodash");
const moment = require('moment');

export class Logger{
    private client:any;

    constructor(private config:{[key:string]:any}){
        const appInsights = require("applicationinsights");

        appInsights.setup(config.ikey)
            .setAutoDependencyCorrelation(false)
            .setAutoCollectRequests(false)
            .setAutoCollectPerformance(true)
            .setAutoCollectExceptions(true)
            .setAutoCollectDependencies(false)
            .setAutoCollectConsole(false)
            .setUseDiskRetryCaching(false)
            .start();

        this.client = appInsights.defaultClient;
        this.client.config.maxBatchIntervalMs = 3000;
        this.config = lodash.defaults(config || {}, {
            dateTimeFormat : 'YYYY-MM-DD HH:mm:ss:SS',
            applicationTag : 'DEFAULT_APPLICATION_TAG',
            prefix : '',
            debugMode : false,
            fileSystemLogs : true,
            minimumLogLevel : 0,
            logRotateTimeInMS : 172800000
        });
    }

    public logJson(level:string, logObj:{[key:string]:any}):void{
        logObj = this.createOrderedJSON(logObj,this.config,level);
        const flattenObj = this.getFlattenObject(logObj);

        const msg = flattenObj.Title || flattenObj.Message;

        this.client.trackEvent({name: msg, properties: flattenObj});

        if(console[level]){
            console[level](this.convertObjectToString(flattenObj));
        }
    }

    public info(message : string):void{
        this.logJson("info" , {
            Title : message
        });
    }

    public error(message : string):void{
        this.logJson("error" , {
            Title : message
        });
    }

    public warn(message : string):void{
        this.logJson("warn" , {
            Title : message
        });
    }

    public debug(message : string):void{
        this.logJson("debug" , {
            Title : message
        });
    }

    private getFlattenObject (obj:{[key:string]:any}):{[key:string]:any} {
        let objToReturn = {};

        for (let key in obj) {
            if (!obj.hasOwnProperty(key)) continue;
            else if (typeof obj[key]=='function')continue;

            if ((typeof obj[key]) == 'object' && obj[key] !== null) {
                let flatObject = this.getFlattenObject(obj[key]);
                for (let x in flatObject) {
                    if (!flatObject.hasOwnProperty(x)) continue;

                    objToReturn[lodash.capitalize(key) + '.' + lodash.capitalize(x)] = flatObject[x];
                }
            } else {
                objToReturn[lodash.capitalize(key)] = obj[key];
            }
        }
        return objToReturn;
    }

    private createOrderedJSON(logObj:{[key:string]:any}, config:{[key:string]:any}, level:string):{[key:string]:any}{
        let newLogJSON:any = {};

        newLogJSON.Date = logObj.hasOwnProperty("Date") ? logObj.Date : moment().format(config.dateTimeFormat);
        delete logObj['Date'];

        lodash.extend(newLogJSON , logObj);
        newLogJSON.Tag = config.applicationTag;

        newLogJSON.Level = level;

        return newLogJSON
    }

    private convertObjectToString(object:{[key:string]:any}):string
    {
        let string = '',
            line;

        for (let index in object) {
            if(index) {
                line = '['  + index + " = " + this.getPrettyValue(object[index]) + ']';
                string += line;
            }
        }
        return string;
    }

    private getPrettyValue(value) : string{
        if (lodash.isArray(value)) {
            return '[' + value.toString() + ']';
        }
        else{
            return  value ? value.toString() : "";
        }
    }
    public getFormatedDate():string{
        return moment().format(this.config.dateTimeFormat);
    }
}