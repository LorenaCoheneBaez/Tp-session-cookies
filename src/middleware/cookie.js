//Guardo la cookie
function cookie(req,res,next) {
     res.locals.userLogin = false
    
     let colorCookie = req.cookies.color;
     let nameCookie = req.cookies.name;
     let emailCookie = req.cookies.email;
     let edadCookie = req.cookies.edad;
    
    if (colorCookie) {
         req.session.userLogin = {
             color : colorCookie,//Color que elige
             name : nameCookie, //nombre del usuario
             email : emailCookie, //email del usuario
             edad : edadCookie, //edad del usuario
         }
    }
 //Guardo la session
    if (req.session.userLogin) {
          res.locals.userLogin= true;
          res.locals.userLogin = req.session.userLogin
    }
    next()
}

module.exports= cookie;