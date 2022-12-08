// const miString = "texto"

// miString="algo"

const miArray = [1,2,3,4,5,6] // asignacion por referencia "a"

console.log(miArray)
// miArray=[1,2,3,4,5,6]
miArray[0]=5 // cambiando el valor en la referencia "a"
miArray=[5,2,3,4,5,6] //referencia "b"

console.log(miArray)
