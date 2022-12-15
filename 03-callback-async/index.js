const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const miCalback = (elemento) => elemento * 2;

const miMap = (array, callback) => {
  const newArray = [];

  for (const elemento of array) {
    if (elemento > 10) {
      //restar 1
      miMap(array, callback)
    } else {
      if (elemento > 11) {
        //restar 2
        miMap(array, callback)
      } else {
        if (elemento > 12) {
          //restar 3
        miMap(array, callback)
        }
      }
    }
  }

  return newArray;
}


// console.log(miMap(array,miCalback));
// console.log(array.map(miCalback));



//-------------------------


const sumar = (a,b)=>a+b
const restar = (a,b)=>a-b
const multiplicar = (a,b)=>a*b
const dividir = (a, b) => a / b

const calculadora = (a, b, callback) => callback(a, b);


// console.log(calculadora(2,3,sumar))
// console.log(calculadora(1,3,restar))
// console.log(calculadora(2,2,multiplicar))
// console.log(calculadora(2,2,dividir))




//----------------------



const raizCuadrada = (number) => {
  return new Promise((resolve,reject) => {
    if (number < 0) {
      reject('Error, el numero ingresado en menor a 0')
    } else {
      const raiz = Math.sqrt(number);
      resolve(raiz);
    }
  })
}


// raizCuadrada(4)
//   .then((numero) => {
//     console.log(`then: se resolvio correctamente la promesa la raiz es: ${numero}`);
//     return numero*2
//   })
//   .then((numero2) => console.log('then2'))
//   .catch((error) => {
//     console.log('catch', error)
//   })
//   .finally(() => {
//     console.log('me da igual lo ejecut si o si')
//   })



//************************ async await */

const miPromesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error no nos conectamos a la bd')
    }, 3000);
  })
}


const getProductos = async() => {
  try {
    console.log('obteniendo productos')
    const productos = await miPromesa();
    console.log(productos)
    console.log('fin del proceso')
  } catch (error) {
    console.log(error)
  }
}


getProductos();