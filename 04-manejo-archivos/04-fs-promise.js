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

const pathFile = './assets/miFilePriomise.txt';

const operacionesFs = async () => {
    console.log('creando archivo...')
    await fs.promises.writeFile(pathFile, miData);
    console.log('archivo creado con exito')
    console.log('leyendo infomacion')
    const dataFile = await fs.promises.readFile(pathFile, 'utf-8');
    console.log('se leyo correctamente el archivo')
    console.log(dataFile);

    console.log('el archivo se eliminara en 3 segundos')

    setTimeout(async () => {
        console.log('se procede a eliminar el archivo')
        fs.promises.unlink(pathFile)
        console.log('archivo eliminado correctamente')
    }, 10000);
}

operacionesFs()
