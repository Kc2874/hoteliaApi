const{Router}= require("express");
const rutasReservas=Router();
const ctrReservas=require("../controller/Reservas.controller");



//rutasReservas.get('/',ctrReservas.obtener);
//rutasReservas.get('/:id',ctrReservas.obtenerId);
//rutasReservas.post('/:id',ctrReservas.add);
//rutasReservas.put('/:id',ctrReservas.edit);

module.exports=rutasReservas;
