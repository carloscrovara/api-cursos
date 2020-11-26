//llamar a mi Base de datos
let data = require("./cursosModel");


function getAllCursos(req, res){
    res.json(data);
}

function getOneCurso(req, res){
    let curso = data.find(function (item) {
      return item.id === parseInt(req.params.id);
    });
  
    if (curso) {
      res.status(200).json(curso);
    } else {
      res.status(404).json("No se encontró curso");
    }
  }
  
  function createCurso(req, res){
    let itemIds = data.map((item) => item.id);
    let nuevoId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
  
    let nuevoCurso = {
      id: nuevoId,
      nombreCurso: req.body.nombre,
      duracion: req.body.precio,
    };

    data.push(nuevoCurso);

    res.status(201).json(nuevoCurso);
  }
  
  function modifyCurso(req, res){
    let curso = data.find(function (item) {
      return item.id === parseInt(req.params.id);
    });
  
    if (curso) {
      let modificarCurso = {
        id: req.body.id,
        nombreCurso: req.body.nombre,
        duracion: req.body.precio,
      };
  
      let encontrado = data.indexOf(curso);
  
      data.splice(encontrado, 1, modificarCurso);
  
      res.status(200).json("Curso modificado");
    } else {
      res.status(404).json("No existe el curso");
    }
  }
  
  function deleteCurso(req, res){
    let curso = data.find(function (item) {
      return item.id === parseInt(req.params.id);
    });
  
    if (curso) {
      let encontrado = data.indexOf(curso);
  
      data.splice(encontrado, 1);
  
      res.status(200).json("curso eliminado");
    } else {
      res.status(404).json("No existe el curso");
    }
  }


//exporto controller

module.exports = {
    getAllCursos,
    getOneCurso,
    createCurso,
    modifyCurso,
    deleteCurso
}