/* const frutas = ["Manzana", "Banana"] */
/* module.exports = frutas  */// = require
/* 
export default frutas */  // = import 

/* const http = require("http"); */
import http from "http"
/* console.log (http) */
const port = 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Servidor ok !</h1>");
});

server.listen(port, () => {
  console.log(`servidor ok en el puerto ${port}`);
});