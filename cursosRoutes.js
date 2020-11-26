const express = require('express');
const app = express.Router();

const cursosController = require("./cursosController");

app.get("/", cursosController.getAllCursos );

app.get("/cursos/:id", cursosController.getOneCurso);

app.post("/cursos/nuevo", cursosController.createCurso);

app.put("/cursos/modificar/:id", cursosController.modifyCurso);

app.delete("/cursos/eliminar/:id", cursosController.deleteCurso);


module.exports = app;