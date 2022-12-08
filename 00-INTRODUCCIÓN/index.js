


//TIPOS DE CONSOLE

// console.log("Hello World"); //Muestra un mensaje en la consola

// console.error("This is an error"); //Muestra un mensaje de error en la consola

// console.warn("This is a warning"); //Muestra un mensaje de advertencia en la consola

// console.clear(); //Limpia la consola

//OTRO TIPO DE CONSOLE

// console.time("Hello"); //Inicia un temporizador

// console.timeEnd("Hello"); //Finaliza un temporizador

// console.table({ a: 1, b: 2 }); //Muestra una tabla con los datos que le pasemos

// console.count("Hola"); //Cuenta las veces que se ha ejecutado el console.count

// console.countReset("Hola"); //Resetea el contador



const kevin = {
    name: "Kevin",
    age: 22,
    flims: ["Spiderman", "Batman", "Superman"],
    series:['The Flash']
}
console.log(kevin);

//TODO: aca que se¡ume uno a la edad y agregar otra pelicula

kevin.age = kevin.age + 1;
// kevin.flims.push('Iron');
// kevin.flims = [...kevin.flims, 'Iron'];
// kevin.flims.unshift('1','2');
kevin.flims = ["Spiderman", "Batman", "Superman", "Iron"]


/*
    SOLUCION
    {
        name: "Kevin",
        age: 23,
        flims: ["Spiderman", "Batman", "Superman", "Iron],
        series:['The Flash']
    }
*/


console.log(kevin);

// console.log(kevin.name); //Muestra el valor de la propiedad name del objeto kevin

