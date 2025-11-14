// //zadanie 1
// //podejście modułowe

// const currency1 = require('./currency1');

// let zlnafuntykwota = 40;
// console.log('wymiana '+ zlnafuntykwota + ' zł na funty GB');
// console.log(currency1.zlNaFunty(40));

// let funtynazlkwota = currency1.zlNaFunty(zlnafuntykwota);
// console.log("wymiana " + funtynazlkwota + " funtów na zł");
// console.log(currency1.funtyNaZl(funtynazlkwota));

// //podejście obiektowe
// console.log('_______________OBIEKTOWE________________');
// const Currency = require('./currency2');

// const GB_PLN = 4.787;
// const currency2 = new Currency(GB_PLN); //wprowadzam w konstruktor wartosc funta
// console.log(currency2.funtNaZl(40));


//zadanie 2
//podejście modułowe
const math1 = require('./mathModule1');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('wprowadź liczbę do dodawania ', function(add1){
    rl.question('wprowadź drugą liczbę do dodawania ', function(add2){
        console.log(math1.add(add1,add2));
        rl.close();
    })
})

console.log('wybierz działanie matematyczne: ');
let choice = await rl.question("1.dodawanie /n 2. odejmowanie /n 3. mnożenie: ");