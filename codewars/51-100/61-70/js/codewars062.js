/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
*/

const zero = (func) => func ? func(0) : 0;
const one = (func) => func ? func(1) : 1;
const two = (func) => func ? func(2) : 2;
const three = (func) => func ? func(3) : 3;
const four = (func) => func ? func(4) : 4;
const five = (func) => func ? func(5) : 5;
const six = (func) => func ? func(6) : 6;
const seven = (func) => func ? func(7) : 7;
const eight = (func) => func ? func(8) : 8;
const nine = (func) => func ? func(9) : 9;

const plus = (b) => function (a) { return a + b; };
const minus = (b) => function (a) { return a - b; };
const times = (b) => function (a) { return a * b; };
const dividedBy = (b) => function (a) { return (a / b).toFixed(1); };

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(one(minus(zero())));
console.log(six(dividedBy(two())));
console.log(eight(dividedBy(three())));

// ! ///////////
// ! Explicacion

console.log(seven(times(five())));

// en five() al no haber parametros la condicional devuelve 5
console.log(seven(times(5)));

// en times(5) devuelve function (a) que a su vez devuelve la operacion de este parametro a por el parametro b que es el que el que ya se habia despejado en el paso anterior (5)
// * (a) es un parametro que se esta esperando
console.log(seven(function (a) { return a * 5; }));
// en seven(...) se pasa el valor 7 como parametro de la anterior funcion lo que completa la operacion

console.log(function (a) { return 7 * 5; }()); // () al final para llamar a funcion y mostrar || a = 7

// //////////////////////
// CodeWars Solution

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].forEach(function (funName, i) {
  funName = function (operation) {
    console.log(operation);
    return operation ? operation(i) : i;
  };
});

function plus2(operandRight) { return function (operandLeft) { return operandLeft + operandRight; }; }
function minus2(operandRight) { return function (operandLeft) { return operandLeft - operandRight; }; }
function times2(operandRight) { return function (operandLeft) { return operandLeft * operandRight; }; }
function dividedBy2(operandRight) { return function (operandLeft) { return operandLeft / operandRight; }; }

console.log(seven(times2(five())));
console.log(four(plus2(nine())));
console.log(one(minus2(zero())));
console.log(six(dividedBy2(two())));
console.log(eight(dividedBy2(three())));
