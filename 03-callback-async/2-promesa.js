const raizCuadrada = (numero) => {
    return new Promise((resolve,reject)=>{
        if(numero<0){
          reject('Error, el numero ingresado es menor a 0')
        }
        resolve(Math.sqrt(numero))
    });
}


raizCuadrada(-9)
  .then((resultado) => { console.log(resultado) })
  .catch((error) => { console.log(error) })
