//creando un map 

const myFunctionMap = (array, callback) => {
    
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray;
    
}

array = myFunctionMap(array, (elemento) => elemento + 1);


Array.prototype.miMap = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]))
    }
    return newArray;
}

const nuevoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(nuevoArray.miMap((elemento) => elemento / 2));

