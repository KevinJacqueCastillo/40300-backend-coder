//otro ejemplo callback


const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

const operacion = (a, b, callback) => {
    return callback(a, b);
}

console.log(operacion(5, 5, suma));
console.log(operacion(5, 5, resta));
console.log(operacion(5, 5, multiplicacion));
console.log(operacion(5, 5, division));
