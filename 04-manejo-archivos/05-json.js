const fs = require('fs')


const procesoPromesa =async () => {
    const read = await fs.promises.readFile('./package.json', 'utf-8');
    const stat = await fs.promises.stat('./package.json')

    const info = {
        contenidoStr: JSON.stringify(read),
        contenidoObj: JSON.parse(read),
        size:stat.size
    }


    await fs.promises.writeFile('./info.json', JSON.stringify(info.contenidoObj));
    console.log(info)
}

procesoPromesa();