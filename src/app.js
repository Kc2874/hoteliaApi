const express = require('express');
const conexionBD=require('./db');
const rutasHabitacion=require('./routes/habitacion.routes');
const rutasReservas=require('./routes/reservas.routes');
const rutasUsuarios=require('./routes/user.routes');
const app=express();

require('dotenv').config();

// Conexion a la BD
conexionBD();

//configuraciones
app.set("name","api-hotelia");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');                           

//midleware
app.use(express.json());

//Llamando Rutas
app.use(express.static('public'));
app.use('/public',express.static('public/upload'));

app.use ('/habitaciones',rutasHabitacion);
app.use ('/User',rutasUsuarios);
app.use ('/reservas',rutasReservas);


module.exports = app;
