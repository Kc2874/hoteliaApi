const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    _id: Number,
    tipodoc: Number,
    nombre: String,
    apellido: String,
    fnacimiento: Date,
    genero: String,
    email:{Type:String,require:true,unique:true},
    telefono:Number,
    paisorigen:String,
    password:String,
    tipouse:String,
    img:String,
    reservas:[{
        type:Schema.Types.ObjectId,
        ref:'Reservas'
}]


})

module.exports = model("user", userSchema);