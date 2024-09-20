var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "wellcome" }');
});

app.get('/login', function (req, res) {
    res.send(`
        <html>
            <head>
                <title>Login Page</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f9;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .login-container {
                        width: 300px;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }
                    h1 {
                        font-size: 2em;
                        margin-bottom: 20px;
                        color: #007bff;
                    }
                    input[type="text"], input[type="password"] {
                        width: 100%;
                        padding: 10px;
                        margin: 10px 0;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }
                    button {
                        width: 100%;
                        padding: 10px;
                        background-color: #007bff;
                        border: none;
                        border-radius: 4px;
                        color: white;
                        font-size: 1em;
                        cursor: pointer;
                    }
                    button:hover {
                        background-color: #0056b3;
                    }
                </style>
            </head>
            <body>
                <div class="login-container">
                    <h1>Login</h1>
                    <form action="/login" method="post">
                        <input type="text" name="username" placeholder="Username" required />
                        <input type="text" name="password" placeholder="Password" required />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </body>
        </html>
    `);
});
app.get('/will', function (req, res) {
    res.send('{ "response": "Perguruan tinggi" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "iam ready!" }');
});
app.get('/cicd', function (req, res) {
    res.send('{ "response": " continuous integration and continuous delivery/deployment " }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
