const { Router } = require("express");
const rutasHabitacion = Router();
const ctrHabitacion = require("../controller/habitacion.controller");
const multer= require("multer");
const fecha = Date.now();


const rutasStorage=multer.diskStorage({
  destination:function (req,file, callback){
        callback(null,'./public/upload/');
},
  filename:function(req,file,callback){
        callback(null,fecha + "_" + file.originalname);
}
})
const upload = multer({ storage:rutasStorage});
rutasHabitacion.get('/', ctrHabitacion.obtener);
rutasHabitacion.get('/:id',ctrHabitacion.obtenerId);
rutasHabitacion.post('/',upload.single('img'),ctrHabitacion.add);
rutasHabitacion.put('/:id',ctrHabitacion.edit);

module.exports = rutasHabitacion;
