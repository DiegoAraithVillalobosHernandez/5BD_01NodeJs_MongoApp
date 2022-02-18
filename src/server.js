const express= require('express');
const hbrs= require('express-handlebars');
const path=require('path');
//Inicializaciones
const app= express();

//Configuraciones

/*Configurar Puerto*/
app.set('port',process.env.PORT || 4000);
/*Configurar donde estan las carpetas de la vista*/
app.set('views',path.join(__dirname,'views')); 
/*Configurar el motor de plantillas*/

app.engine('.hbs',hbrs.engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine','.hbs');

//Middleware
app.use(express.urlencoded({extended:false}));

//Rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/notas.routes'));
//Variables Globales

//Archivos Estaticos
app.use(express.static(path.join(__dirname,'public')));

//Exportación de la config
module.exports= app;
