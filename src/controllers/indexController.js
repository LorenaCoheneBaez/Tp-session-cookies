const { validationResult } = require('express-validator');
let {datos,guardar} = require("../data/index_db");

module.exports = {
index: (req, res) => {
return res.render('index', {
        title: 'Garden designs',
        datos,
    });
    },
//Vista registro
    indexGet: (req, res) => {
        return res.render('registro', {
            title: 'Garden designs',
            datos,
        });
    },
    //Método guardar registro
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
        let on = req.body.recordar;
        if (on) {
            res.cookie("color", req.body.color, { maxAge: 120000 });
            res.cookie("name", req.body.name, { maxAge: 120000 });
            res.cookie("edad", req.body.edad, { maxAge: 120000 });
            res.cookie("email", req.body.email, { maxAge: 120000 });
        }
        req.session.userLogin = {
            name,
            color,
            email,
            edad
        }
        console.log(req.session)
        res.render('index', { title: 'Garden designs', name, color, email, edad })
    }else{
        return res.render('registro',{
            datos,
            errores: errors.mapped(),
            old: req.body,
            title: 'Garden designs'
        })
    }
},
despedida: (req, res) => {
    console.log(req.session)

         return res.render('despedida', {
           datos, title: 'Garden designs' })
    },
olvidarColor: (req, res) => {
        req.session.destroy();
        res.clearCookie('name');
        res.clearCookie('color');
        res.clearCookie('edad');
        res.clearCookie('email');
        res.redirect("/");
    }
};
