const { Router } = require("express");
const rutasHabitacion = Router();
const ctrHabitacion = require("../controller/habitacion.controller");



rutasHabitacion.get('/', ctrHabitacion.obtener);
//rutasHabitacion.get('/:id',ctrHabitacion.obtenerId);
//rutasHabitacion.post('/:id',ctrHabitacion.add);
//rutasHabitacion.put('/:id',ctrHabitacion.edit);

module.exports = rutasHabitacion;
