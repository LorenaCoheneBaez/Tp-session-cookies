const { validationResult } = require('express-validator');
let {datos,guardar} = require("../data/index_db");

module.exports = {
index: (req, res) => {
return res.render('index', {
        title: 'Garden designs',
        datos,
    });
    },

    indexGet: (req, res) => {
        return res.render('registro', {
            title: 'Garden designs',
            datos,
        });
    },
indexPost: (req, res) =>{
    let errors = validationResult(req);
    if (errors.isEmpty()) {
        const{
            name,color,email,edad
        }=req.body
let logueado={
    name, 
    color, 
    email, 
    edad:+edad
}
datos.push(logueado)
guardar(datos)
//guardar datos de la session
req.session.userLogin={
    name,
    color,
    email,
    edad
}
//cookie, para recordar color
//FIXME: ARREGLAR METODO DE RECORDAR COLOR
//         recordar && res.cookie("Esto es session",req.session.userLogin,{maxAge:50000})
// return res.redirect('/')
    }else{
        return res.render('registro',{
            datos,
            errores: errors.mapped(),
            old: req.body,
            title: 'Garden designs'
        })
    }
}
};
