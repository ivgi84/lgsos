const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = 'AIzaSyBmSQ5KA1fnYEIE65jrA3H4HJELjJzIb_M';
const apiUrl ='https://www.googleapis.com/webfonts/v1/webfonts?key=';


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