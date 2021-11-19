var express = require('express');
var router = express.Router();
const { index, indexPost, indexGet}=require('../controllers/indexController')
const validator=require('../validations/indexValidator')
/* GET home page. */
router.get('/',index);
router.get('/registro', indexGet);
router.post('/registro', validator, indexPost);
module.exports = router;
