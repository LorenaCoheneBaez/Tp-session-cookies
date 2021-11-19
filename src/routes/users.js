var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mas', function (req, res, next) {
  res.render('despedida', { title: 'Holaa' });
});

module.exports = router;
