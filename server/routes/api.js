const express = require('express');
const router = express.Router();

/**
 * GET api listing
 */

 router.get('/', handler);
 router.post('/auth/register', registerHandler)

 function handler(req, res){
   res.send('api works');
 }

 function registerHandler(req, res){
   res.send('api works register')
 }

 module.exports = router;