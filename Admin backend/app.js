const express = require("express");
require("./db/conn");
const Student = require("./models/movies");
const movieRouter = require("./routers/movies");

const app = express();
const port = process.env.PORT || 8000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json()); 
app.use(movieRouter);


app.listen(port,() =>{
    console.log(`connection is successfull and port number is ${port}`)
}) 







