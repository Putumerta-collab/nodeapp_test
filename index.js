var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "CICD (continuous integration and continuous delivery/deployment)" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Universitas Pendidikan Ganesha" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "iam ready!" }');
});
app.get('/merta', function (req, res) {
    res.send('{ "response": " Hello Merta " }');
});
app.get('/puja', function (req, res) {
    res.send('{ "response": "dengang" }');
});
app.get('/cicd', function (req, res) {
    res.send('{ "response": " continuous integration and continuous delivery/deployment " }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
