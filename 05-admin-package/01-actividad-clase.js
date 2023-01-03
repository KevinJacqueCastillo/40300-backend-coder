const array = []
for (let i = 0; i < 1000; i++) {
    const value = Math.trunc(Math.random() * 20)+1;
    array.push(value);
}

let object = {}
array.map(i => {
    object = {
        ...object,
        [i]:array.filter(v=>v==i).length
    }
    return i;
})

console.log(object)
console.log(Object.values(object).reduce((acc,value)=>acc+value,0))
