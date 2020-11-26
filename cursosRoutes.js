const express = require('express');
const app = express.Router();


app.get("/", function(req, res){
    res.json("funciona")
})


module.exports = app;