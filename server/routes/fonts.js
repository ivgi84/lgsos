const express = require('express');
var _  = require('underscore');
const router = express.Router();
const axios = require('axios');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const promise = require('promise');

const fsHelpers = require('../helpers/files');


const apiKey = 'AIzaSyBmSQ5KA1fnYEIE65jrA3H4HJELjJzIb_M';
const apiUrl ='https://www.googleapis.com/webfonts/v1/webfonts?key=';


router.post('/upload', (req,res)=>{
    console.log('request to upload font recieved')
    let form = new formidable.IncomingForm();
    form.multiples = true;
    form.uploadDir = path.join(__dirname, '../uploads');
    form.uploadDirFonts = form.uploadDir + '/fonts';

    fsHelpers.foldersCheck(form);

    form.on('file', (field, file)=>{
        try{
            fs.rename(file.path, path.join(form.uploadDirFonts, file.name));
            console.log('file was successfuly uploaded');
        }
        catch(error){
            console.log('failed to move file to directory, error'+ error);
        }
    });

    form.on('error',(err)=>{
        console.log('An error has occured:' + err);
        res.set({
            'Content-type':'application/json'
        });
        res.status(422).send(JSON.stringify({status:0}))
    });
    form.on('end', ()=>{
        console.log('Request endonFileSelect');
        res.set({
            'Content-Type': 'application/json',
          });
        res.status(200).send(JSON.stringify({status:10}));
    });

    form.parse(req);   // parse the incoming request containing the form data
});

router.get('/getAll',(req, res)=>{
    getFonts(req, res);
});

function getFonts(req, res){
    let options = '';

    // if(req.options){
    //     _.each(req.options, (val, key)=>{
    //         options += '&' + key + '=' + val;
    //     });
    // }

    let request = 'https://www.googleapis.com/webfonts/v1/webfonts?key=' + apiKey + options;
    console.info(request);

    axios.get(request).then(response => {
        console.log('google fonts request success', res);

        res.status(200).json(response.data);
        
        //res.status(200).send(fonts).end();
    })
    .catch(error => {
        console.error('Error loading fonts', error);
        //res.status(501).end();
    });


    // fsHelpers.shouldUpdateFontsCache().then((result)=>{
    //     console.log('result: ', result)
    //     if(result){
    //         axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBmSQ5KA1fnYEIE65jrA3H4HJELjJzIb_M').then(res =>{
    //             console.log('success getting fonts');
    //             //res.status(200).json(fonts.data);
    //             // fonts = JSON.stringify(res);
    //             //TODO: find how to save json file
    //             fsHelpers.writeFontsResponseToCache(sampleObject).then(res=>{
    //                 console.log('cached')
    //             });
    //         })
    //         .catch(error=>{
    //             console.log('ERROR', error);
    //             res.status(500).send(error);
    //         });   
    //     }
    //     // else {
    //     //     fsHelpers.getFontsFromCache().then(data=>{
    //     //         console.log('fonts: ', data);
    //     //         return data;
    //     //     });
    //     // }
    // });
}

//getFonts({sort:'popularity'});
//getFonts();

module.exports = router;