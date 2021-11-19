var express = require('express');
var router = express.Router();
const { despedida, olvidarColor } = require('../controllers/indexController')

/* GET home page. */
router.get('/mas', despedida);
//Para borrar el color de fondo que se guardo en la cookie/session
router.get('/mas/olvidarColor', olvidarColor);

module.exports = router;
