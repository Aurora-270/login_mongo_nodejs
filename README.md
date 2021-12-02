"# login_mongo_nodejs" 
Alumna: Aurora Alvarez Samano 
NUA: 403677

Tarea 3
Servidor NodeJs con acceso a datos con MongoDB en el cual se realiza un Login con seguridad integrada al encriptar el password, con una sesión extra a libre elección ( en este caso es el registro de libros) donde se puede insertar un registro en la bases de datos el cual se puede eliminar o modificar según la elección del usuario.


Dependencias requeridas (para instalarlas se utiliza npm install nombre_dependecia ejmp -> npm install express) "bcrypt-nodejs", "connect-flash", "ejs-mate", "express", "express-session", "mongoose", "morgan", "passport", "passport-local",

Dependencias de desarrollo( npm install nodemon -D) "nodemon"

Script para inciar servidor "dev": "nodemon src/index.js"

Es necesario iniciar proyecto de NodeJs con comando npm init -y
Inicializar docker con los comandos "docker-compose build" 
y luego con "docker-compose up"

