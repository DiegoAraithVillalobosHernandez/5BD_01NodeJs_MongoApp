const { Router } = require('express');
const router = Router();
const {
    renderFormNotas,
    crearNota,
    renderNotas,
    renderEditNota,
    EditNota,
    DeleteNota
} = require('../controllers/notas.controller');
//Definir las rutas para las notas

/*Crear una Nota*/
router.get('/notas/agregar', renderFormNotas);
router.post('/notas/agregar', crearNota);

/*Obtener las notas*/
router.get('/notas', renderNotas);

/*Editar Notas*/
router.get('/notas/editar/:id', renderEditNota);
router.put('/notas/editar/:id', EditNota);

/*Eliminar*/
router.delete('/notas/eliminar/:id', DeleteNota);
module.exports = router;