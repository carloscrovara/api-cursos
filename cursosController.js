//llamar a mi Base de datos
let data = require("./cursosModel");



function GetAllCursos(req, res){
    res.json(data);
}


//exporto controller

module.exports = {
    GetAllCursos
}