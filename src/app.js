
const express = require ('express'); // trae la funcion para ejecutar el codigo 

const app = express (); // ejecuta la funcion que trae del codigo y el resultado lo guarda en app

const PORT = 3001;

app.get ('/api', ( request , res) =>
{ 
      res.json({mensaje: 'Hola mundo'}).status(200) // atributo es mensaje - hola mundo es el valor 
}); // cuando alguien busque  http:
//Localhost:3001/api le tiene que salir el mensaje de arriba 

app.listen (PORT, () => { //listen pone la app a escuchar 
    console.log('estoy escuchando el puerto:' + PORT) })
