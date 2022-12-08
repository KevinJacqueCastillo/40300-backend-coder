const mostrarLista=(parametroArray)=>{
    if(parametroArray.length == 0){
        console.log('lista vacia')
    } else {
        for(let i=0;i<parametroArray.length;i++){
            console.log(parametroArray[i]+1)
        }
        for (const numero of parametroArray) {
            console.log(numero+1)
        }
        parametroArray.forEach(v => console.log(v+1))
        console.log(parametroArray.length)
    }

}
//2,3,4,5,6
mostrarLista([1,2,3,4,5])