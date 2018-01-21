const express = require('express');
const router = express.Router();
const axios = require('axios');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

const apiKey = 'AIzaSyBmSQ5KA1fnYEIE65jrA3H4HJELjJzIb_M';
const apiUrl ='https://www.googleapis.com/webfonts/v1/webfonts?key=';


router.post('/upload', (req,res)=>{
    console.log('request to upload font recieved')
    let form = new formidable.IncomingForm();
    form.multiples = true;
    form.uploadDir = path.join(__dirname, '../uploads');
    form.uploadDirFonts = form.uploadDir + '/fonts';

    foldersCheck(form);

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
    console.log('get font request');
    axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBmSQ5KA1fnYEIE65jrA3H4HJELjJzIb_M').then(fonts =>{
        console.log('success getting fonts');
        res.status(200).json(fonts.data);
    })
    .catch(error=>{
        console.log('ERROR', error);
        res.status(500).send(error);
    });
});

function foldersCheck(form){
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

module.exports = router;