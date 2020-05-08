# ProyectoFinalSpringBootAPI
![Proyecto final Alex Dominguez](https://ibb.co/qW00wD0 "Proyecto final Alex Dominguez")

Este repositorio consta de 3 aplicaciones

## SpringBootAPIRestaurant

Es la parte back-end de la aplicación. Está diseñada con el framework de Java SpringBoot. Su tarea consiste en comunicarse con el front-end a través de una API utilizando los métodos GET, POST, PUT, DELETE, con la base de datos, para poder leer, añadir, actualizar o borrar los datos.
Para inicializar la aplicación, sólo hay que ejecutar el archivo .jar que se encuentra en SpringBootAPIRestaurant\target
Es importante haber importado antes la base de datos y tener el servicio mysql activo

## AngularWebAPIRestaurant

Es la parte front-end de la aplicación. Está diseñada con el framework de JavaScript Angular9. Trata de, a través de una interfaz web, comunicarse con la aplicación back-end y realizar peticiones de consulta, escritura y borrado.
Para correr la aplicación, sólo tenemos que ir al directorio AngularWebAPIRestaurant y ejecutar el comando:

`ng serve`

## AngularWebRestaurant

Es una página web creada desde Angular9 con el único propósito de consumir los datos de la API de la aplicación de SpringBoot. En este caso sólo se permite leer los datos.
Para correr la aplicación, sólo tenemos que ir al directorio AngularWebAPIRestaurant y ejecutar el comando:

`ng serve`

Si queremos correr las 2 aplicaciones Angular a la vez, al ocupar por defecto el mismo puerto le podemos cambiar manualmente esta opción:

`ng serve --port 4201`