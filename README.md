# Garden designs

## Objetivo:

Crear un proyecto con express-generator para persistir datos usando cookies y session, el mismo muestra las vistas de home, galería de imagenes, formulario de registro.

El formulario se encuentra validado con express-generator, y muestra los errores en cada campo. Además, una vez enviado, guarda la información ingresada en session. Si el usuario selecciona en el botón de recordar, lo almacenado en session se guarda en cookies.

Los datos almacenados en session: nombre, email y edad, se utilizan para dar una bienvenida (en el home) y despedida personalizada (en la galería).

El color seleccionado cambia el color de fondo de las vistas home y galería.

Para cerrar la session y dejar de almacenar las cookies, se encuentra el botón olvidar en la vista galería.

## Tecnologías usadas


<p align="left">
 <!–– JAVASCRIPT ––>
<a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" data-bs-toggle="tooltip" title="JavaScript"> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javaScript"/> </a>
<!-- EXPRESS -->
<a href="https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction" alt="Express Js" ><img src= "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /></a>
<!-- JSON -->
<a href="https://www.w3schools.com/whatis/whatis_json.asp" alt="Express Js" ><img src= "https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" /></a>
<!–– CSS ––>
<a href="https://www.w3schools.com/css/" target="_blank" data-bs-toggle="tooltip" title="CSS3"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/> </a>
<!–– BOOTSTRAP ––>
<a href="https://getbootstrap.com" target="_blank" data-bs-toggle="tooltip" title="Bootstrap"> <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootstrap"/></a>
  </p>

### Vista previa
![Garden designs vista previa del home](https://github.com/LorenaCoheneBaez/crud-manipulacion-datos-db/blob/[master]/public/images/home-preview-garden.jpeg?raw=true)

### ¿Cómo instalar el proyecto?

#### Desde la terminal:

- Clonar el proyecto:

```
git clone https://github.com/LorenaCoheneBaez/Tp-session-cookies.git
```

- Ingresar a la carpeta del proyecto:

````
 cd Tp-session-cookies
````

- Para instalar las dependencias correr: 

````
 npm install
````

### Levantar el servidor del proyecto: 

````
 npm start
````

### Rutas:

- Home "http://localhost:3000/"
- Galería "http://localhost:3000/users/mas"
- Formulario de registro "http://localhost:3000/registro"
