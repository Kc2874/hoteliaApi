const mongoose= require('mongoose');

const conexionBD = async()=>{
const url=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ppy60m7.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
 try {
    const DB=await mongoose.connect(url);
    console.log("Conexión exitosa", DB.connection.name);
 } catch (error) {
    console.log(error);
 }
}
module.exports=conexionBD;