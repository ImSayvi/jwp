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

const fs = require("fs");
console.log("Początek skryptu.");
fs.readFile('package.json', function (err, data) {
 if (err) return console.error(err);
 console.log(data.toString());
});
console.log("Koniec skryptu.");
