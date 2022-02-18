const { request } = require("express");

const NotasController = {};

const Nota = require('../models/Notas');

NotasController.renderFormNotas = (req, res) => {
    res.render('Notas/nuevaNota')
};

NotasController.crearNota = async (req, res) => {
    /*Extraer los datos del POST*/
    const { titulo, descripcion } = req.body;
    /*Guardar en la Base de Datos*/
    const NewNote = new Nota({ titulo, descripcion });
    await NewNote.save();
    res.send('Nueva Nota');
};

NotasController.renderNotas = async(req, res) => {
   const Notas= await Nota.find();
   res.render('Notas/notas',{Notas});
};

NotasController.renderEditNota = (req, res) => {
    res.send('Editar Nota');
};

NotasController.EditNota = (req, res) => {
    res.send('Editar Nota');
};

NotasController.DeleteNota = (req, res) => {
    res.send('Elinar Nota');
};
module.exports = NotasController; 