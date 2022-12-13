const sales =  [
    {   //acc = 0
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2
    },
   {
       manzanas:1,
        sandias:1,
       huevos:6,
        jugos:1,
        panes:4
    }
]

const totalSale = {
   ...sales[0],
   ...sales[1]
 }
 
 
 const soldItems = Object.keys(totalSale)
console.log(soldItems)
//option 1
const arrayValue = [...Object.values(sales[0]), ...Object.values(sales[1])]
const option1 = arrayValue.reduce((anterior,value)=>anterior+value,0)
//option 2
const suma = sales.reduce(
    (anterio, value) => anterio + Object.values(value).reduce((anterio, value) => anterio + value, 0)
    , 0)
console.log(option1)