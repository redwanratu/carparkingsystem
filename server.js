const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');
//locate config File
dotenv.config({ path: './config.env' });

// connect database
const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('database connected');
  });

//Server Running
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server listenning....');
});
