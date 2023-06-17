const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGO_URL, connectionParams } = require("./src/config/config");
const contactRoutes = require('./src/routes/contactRoutes');
const stuproblemRoutes = require('./src/routes/stuproblemRoutes');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(MONGO_URL, connectionParams)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

  app.listen(3100,()=>{
    console.log("server on 3100");
  })

 // Router
 app.use('/contacts', contactRoutes);
 app.use('/prob' , stuproblemRoutes);
