const fs = require('fs');



const pathFile = './assets/fechaActual.txt';
const dateNow = new Date().toLocaleString();

fs.writeFile(pathFile, dateNow, (error) => {
    if (error) {
        console.log('ocurrio error al crear archivo')
    } else {
        fs.readFile(pathFile, 'utf-8', (error, resultado) => {
            if (error) {
                console.log('ocurrio error al leer archivo')
            } else {
                console.log(resultado)
            }
        })
    }
})


