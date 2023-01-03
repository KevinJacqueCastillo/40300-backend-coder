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
//creando archivo
if (!fs.existsSync('./assets/miFile.txt')) {

    fs.writeFileSync('./assets/miFile.txt', miData, {
        encoding:'utf-8'
    });

} else {

    console.log('el archivo ya existe')

}


//creando archivo
if (fs.existsSync('./assets/miFile.txt')) {

    fs.appendFileSync('./assets/miFile.txt', '\nAtetamente: Kevin Jacque', {
        encoding:'utf-8'
    });

} else {

    console.log('el archivo no existe')

}

//leyendo archivo
if (fs.existsSync('./assets/miFile.txt')) {

    const data = fs.readFileSync('./assets/miFile.txt','utf-8');
    console.log(data)

} else {

    console.log('el archivo no existe')

}

//eliminar

fs.unlinkSync('./assets/miFile.txt')