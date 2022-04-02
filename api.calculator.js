const express = require("express");
const app = express();
const cal = require('./calculator');

app.get("/add", (req, res) =>{
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.json({
        result: cal.sum(a, b)
    });
});

app.get("/subtract", (req, res) =>{
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.json({
        result: cal.restar(a, b)
    });
});

//exports app module
module.exports = app;