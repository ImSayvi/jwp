// // przykład asynchronicznego działania - nie czekało 3 sekund
// const wait = 3000;
// console.log("Początek skryptu...");
// setTimeout(function(){
//  console.log("Upłynęły minimum 3 sek...")
// }, wait);
// console.log("koniec skryptu...");

// // wykoanne po kolei
// const fs = require("fs");
// const data = fs.readFileSync('package.json');
// console.log("Początek skryptu.");
// console.log(data.toString());
// console.log("Koniec skryptu.");

// const fs = require("fs");
// console.log("Początek skryptu.");
// fs.readFile('package.json', function (err, data) {
//  if (err) return console.error(err);
//  console.log(data.toString());
// });
// console.log("Koniec skryptu.");


// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 8888;
// const server = http.createServer(function(request, response) {
//  response.statusCode = 200;
//  response.setHeader('Content-Type', 'text/plain');
//  response.end('Witaj, z serwera node.js !\n');

// });
// server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
// });

const capitalize = require('string-capitalize');

const http = require('http');
const path = require("path");
const v8 = require("v8");

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, from Node.js server!\n');
});

server.listen(port, hostname, () => {
  console.log(`[${new Date().toISOString()}] Heap Statistics:`, v8.getHeapStatistics());
  console.log("Current file:", path.basename(__filename));
  console.log("Uploads path:", path.join(__dirname, 'uploads', 'images'));
  console.log(`Server running at http://${hostname}:${port}/`);

  const text = "ala ma kota a kot ma ale";
  const result = capitalize(text);

  console.log("Moduł string-capitalize:");
  console.log("Opis: Zamienia pierwszą literę stringa na wielką.");
  console.log("Przed:", text);
  console.log("Po:", result);
});
