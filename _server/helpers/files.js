const fs = require('fs');
const path = require('path');

const localCacheFolder = path.join(__dirname, '../cache');
const fontsFile = localCacheFolder + '/fonts.json';

module.exports = {

    writeFontsResponseToCache(data){
        return new Promise((resolve, reject)=>{
            console.log(data)
            fs.writeFile(fontsFile, data, (err)=>{
                if(err){
                    console.error(err);
                    reject(err);
                }
                resolve(true);
            });
        });
    },
    getFontsFromCache(){
        return new Promise((resolve, reject)=>{
            fs.readFile(fontsFile, (err, data)=>{
                if(err){
                    console.error(err);
                    reject(err);
                }
                resolve(data);
            });
        });
    },
    shouldUpdateFontsCache(){
        return new Promise((resolve, reject)=>{
        console.info('checking local cache');
        if(fs.existsSync(fontsFile)){ // check if file exists
            fs.stat(fontsFile, (err, stat)=>{ // checking last modificatio file time
                let timeSinceUpdate = new Date().getTime() - stat.mtime; // in miliseconds
                let shouldUpdate = (timeSinceUpdate / 1000 / 60 / 60).toFixed(0) >= 0; 
                console.log('time since last update (in min): ', (timeSinceUpdate / 1000 / 60 / 60).toFixed(0));
                console.log('should update cache: ', shouldUpdate);
                resolve(shouldUpdate);
            });
        }
        else{
            fs.writeFile(fontsFile, '{}', (err)=>{
                if(err) reject(err);
                console.log('file font.json created');
                resolve(true)
            })
        }
        });
    },
    foldersCheck(form){
        if(!fs.existsSync(form.uploadDir)){
            try{
                fs.mkdirSync(form.uploadDir);
                fs.mkdirSync(form.uploadDirFonts);
            }
            catch(error){
                res.status(422).send(error);
            }
        }
        else{
            if(!fs.existsSync(form.uploadDirFonts)){
                try{
                    fs.mkdirSync(form.uploadDirFonts);
                }
                catch(error){
                    res.status(422).send(error);
                }
            }
        }
    }
}