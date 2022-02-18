const mongoose = require('mongoose');

//URI BASE de DATOS
const uri = "mongodb+srv://carsimax:02101998@sisa.wnss3.mongodb.net/SISA?retryWrites=true&w=majority";
//Conexion a MongoDB
mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(db => console.log('Conectado'))
    .catch(err => consol.log(err));