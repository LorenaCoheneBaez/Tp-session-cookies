const {check,body}=require('express-validator');

let validate = [
  check('name')
    .notEmpty()
    .withMessage('Campo obligatorio'),
  body('email')
    .notEmpty()
    .withMessage('Campo obligatorio')
    .isEmail()
    .withMessage('Ingrese un formato válido'),
  check('color').notEmpty().withMessage('Campo obligatorio'),
  check('edad').notEmpty().withMessage('Campo obligatorio'),
];

module.exports=validate;