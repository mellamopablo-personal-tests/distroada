# DistroADA

DistroADA es un clon de DistroWatch hecho en PHP penco.

## Configurando el proyecto

Para configurar el proyecto hay que realizar los siguientes pasos:

* Crear una base de datos llamada `distroada`
* Ejecutrar el archvio `scripts/schema.sql` en nuestra base de datos. También
 podemos ejecutar `scripts/sampleData.sql` para añadir datos de prueba.
* Copiar el archivo `.env.example` a `.env` y añadir los datos de nuestra 
base de datos. Según el motor de base de datos que queramos usar, tendremos 
que habilitarlo en `php.ini`.
* Realizar un `composer install`.
* Realizar un `npm install`.
* Realizar un `npm build`.
* Iniciar el servidor HTTP, por ejemplo Apache.
* Podremos visitar la página en `localhost/distroada/src`. En el futuro, las 
URLs se mejorarán con `mod_rewrite`, pero de momento esto es lo que hay.