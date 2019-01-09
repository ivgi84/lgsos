const express = require('express');
const router = express.Router();

/**
 * GET api listing
 */

 router.get('/', handler);

 function handler(req, res){
   res.send('api works');
 }

 module.exports = router;