const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {connectionDB} = require('./src/database/mongo')
const questionsRouter = require("./src/questions/router/questions.router")
const authRouter = require("./src/auth/router/auth.router")

const path = require("path");

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(
    cors({
        credentials: true,
        origin: true
    })
);



const environment = (process.env.NODE_ENV || 'development').toLowerCase();
if(environment !== 'production'){
        require('dotenv').config()
}



app.options('*', cors());

connectionDB();

app.use("/api/v1/questionnaire", questionsRouter);
app.use("/api/v1/auth", authRouter);
module.exports = app;
