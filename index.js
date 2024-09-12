var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From testing cicd projek" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "universitas pendidikan ganesha" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "iam ready!" }');
});
app.get('/merta', function (req, res) {
    res.send('{ "response": " Hello Merta, How are you? " }');
});
app.get('/puja', function (req, res) {
    res.send('{ "response": "I am Dengang" }');
});
app.get('/cicd', function (req, res) {
    res.send('{ "response": " continuous integration and continuous delivery/deployment " }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
