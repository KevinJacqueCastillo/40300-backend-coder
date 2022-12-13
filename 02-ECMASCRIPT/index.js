
//antes
const antes = Math.pow(2, 2)
// console.log(antes)

//  ******************** ecmascript 7 ********************

//elecado
const resultado = 2 ** 2
// console.log(resultado)

//ejemplo includes

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const exists = array.includes(10)
// console.log(exists)

const arrayObject = [{ name: 'valeria' }, { name: 'jose' }];
const existsObject = arrayObject.includes({ name: 'valeria' })

// console.log(existsObject)



//  ******************** ecmascript 8 ********************

//operador nullish

let variable;
const nullish = variable ?? 'string default';
// console.log(nullish);


// Object.entries, Object.values, Object.keys

const producto = {
    id: 2, //[id, 2]
    description: 'producto 2',
    price: 200
}

//[id, 2]...[price, 200]..etc
const entries = Object.entries(producto)
// console.log(` el producto con ${entries[1][0]}: ${entries[1][1]}, tiene un ${entries[2][0]} de ${entries[2][1]}`)

// [id, description, price]
const values = Object.values(producto)
// console.log(values[0])
// console.log(values[1])
// console.log(values[2])

const keys = Object.keys(producto)
// console.log(keys[0])
// console.log(keys[1])
// console.log(keys[2])

//  ******************** ecmascript 9 ********************


//Example operador res

const obj = {
    name: 'alan',
    age: 25,
    country: 'colombia'
}

let { age, ...all } = obj
// console.log(all)

//Example spreads

const almacen = {
    name: 'Almacen alan',
    createdAt: '25-02-1999',

}
const productos={products:['pan','mermelada','queso']}

const almacenProductos = {
    ...obj,
    ...productos,
}

// console.log(almacenProductos)


//  ******************** ecmascript 10 ********************

//example flat

const arrays = [1, 2, 3, [4, 5, 6]]
const arrayFlat = arrays.flat()
// console.log(arrayFlat)


//example trim

const string = '     hola mundo     '
const stringTrim = string.trim()
// console.log(stringTrim)


