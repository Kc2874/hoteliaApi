const{Router}= require("express");
const rutasUsuarios=Router();
const ctrUsuarios=require("../controller/user.controller");



//rutasUsuarios.get('/',ctrUsuarios.obtener);
//rutasUsuarios.get('/:id',ctrUsuarios.obtenerId);
//rutasUsuarios.post('/:id',ctrUsuarios.add);
//rutasUsuarios.put('/:id',ctrUsuarios.edit);

module.exports=rutasUsuarios;
