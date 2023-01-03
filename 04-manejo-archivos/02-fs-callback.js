const fs = require('fs');

const miData = `
Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the 
industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled 
to make a type specimen book. It has survived 
not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of 
Letraset sheets containing Lorem Ipsum passages, and more
recently with desktop publishing software like Aldus 
PageMaker including versions of Lorem Ipsum.
`

const pathFile = './assets/miFile.txt'


fs.writeFile(pathFile, miData, (error) => {
    if (error) {
        return console.log('ocurrio un error intentando crear el archivo')
    } else {
        fs.readFile(pathFile, (error, result) => {
            if (error) {
                return console.log('ocurrio un error al intentar leer el archivo')
            } else {
                console.log(`data: ${result}`)
                fs.appendFile(pathFile, '\nAtentamente Kevin Jacque', (error) => {
                    if (error) {
                        return console.log('ocurrio un error al intentar agregar texto al archivo')
                    } else {
                        fs.unlink(pathFile, (error) => {
                            if (error) {
                                return console.log('ocurrio un error al intentar eliminar el arhcihvo')
                            } else {
                                console.log('se elimino correctamente')
                            }
                        })
                    }
                })
            }

        })
    }

})