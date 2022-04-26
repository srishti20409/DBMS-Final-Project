const express = require('express')
const app = express()
const db = require("./whatsapp-backend/models");
db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081"
  };
  app.use(cors(corsOptions));
  // parse requests of content-type - application/json
  app.use(express.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  // simple route

app.get('/',(req,res) => {
    res.status(200).send('hello world')
})

const port = process.env.PORT || 8080;

app.listen(port , ()=> console.log(`listening on local host ${port}`))


const mysql = require('mysql')






