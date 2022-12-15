/**
    Definir función suma:
        -Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
        -En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
        -En caso de que la suma sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver valores positivos

*/


const suma = (a,b) => {
    return new Promise((resolve, reject) => {
        if (a != 0 && b != 0) {
            const result = a + b;
            if (result < 0) {
                reject('La calculadora sólo debe devolver valores positivos');
            } else {
                resolve(result)
            }
        } else {
            reject("Operación innecesaria")
        }
    })
}

/*
    Definir función resta:
        -Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
        -En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
        -En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”
 */

const resta = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a != 0 && b != 0) {
            const result = a - b;
            if (result < 0) {
                reject('La calculadora sólo puede devolver valores positivos')
            } else {
                resolve(result);
            }
        } else {
            reject('operacion invalida')
        }
    });
}

// Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch



const calculos = async (a,b,callback) => {
    try {
        const result = await callback(a, b);
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}


calculos(2,3,resta)
