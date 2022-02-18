const {Schema,model}= require('mongoose');

const NotaSchema= new Schema({
    titulo:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    }
},{//nos va a registrar la fecha cuando insertemos y monitorea cuando modifiquemos
    timestamps:true 
});

//Mongoose por defecto busca en la bd la coleccion dada aquí y si no esta, la crea
module.exports= model('Nota',NotaSchema);