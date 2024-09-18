var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(`
        <html>
            <head>
                <title>CICD Info</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f9;
                        color: #333;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        width: 80%;
                        margin: 0 auto;
                        text-align: center;
                        padding: 20px;
                    }
                    h1 {
                        color: #007bff;
                        font-size: 3em;
                        margin-bottom: 10px;
                    }
                    p {
                        font-size: 1.2em;
                        line-height: 1.5;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Welcome to CICD Info</h1>
                    <p>CICD stands for Continuous Integration and Continuous Delivery/Deployment.</p>
                </div>
            </body>
        </html>
    `);
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
