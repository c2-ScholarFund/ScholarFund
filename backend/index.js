const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URL, connectionParams } = require("./src/config/config");
const contactRoutes = require('./src/routes/contactRoutes');



const app = express();

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
