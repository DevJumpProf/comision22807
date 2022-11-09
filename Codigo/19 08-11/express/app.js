/* const express = require("express"); */
import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola desde el servivor!");
});

app.get("/contactos", (req, res) => {
    res.send("aca iria la pagina de contactos!");
  });

  app.get("/registro", (req, res) => {
    res.send("aca iria la pagina de registro!");
  });



app.listen(port, () => {
  console.log(`servidor ok en  http://localhost:${port}`);
});
