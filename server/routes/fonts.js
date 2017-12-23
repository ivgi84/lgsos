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
    debugger;
    let form = new formidable.IncomingForm();
    form.multiples = true;
    form.uploadDir = path.join(__dirname, '/uploads');

    form.on('file', (field, file)=>{
        debugger;
        fs.rename(file.path, path.join(form.uploadDir, file.name));
    });
    form.on('error',(err)=>{
        debugger;
        console.log('An error has occured:' + err);
    });
    form.on('end', ()=>{
            res.end('success');
    });
    form.parse(req);
});

router.get('/getAll',(req, res)=>{
    console.log('get font request');
    axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBmSQ5KA1fnYEIE65jrA3H4HJELjJzIb_M').then(fonts =>{
        console.log('success');
        res.status(200).json(fonts.data);
    })
    .catch(error=>{
        console.log('ERROR', error);
        res.status(500).send(error);
    });
});

module.exports = router;