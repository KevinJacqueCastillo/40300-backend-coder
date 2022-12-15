


const miPromesa = () => new Promise((resolve, reject) => {

    setTimeout(() => {
            resolve(['polera', 'pantalon', 'zapatos']);
        }, 3000);
    }
);


const miFuncion = async () => {
    console.log('Cargando', 'obteniendo productos');
    const resultado = await miPromesa();
    console.log('los productos son: ',resultado);
    console.log('Fin, terminamos de cargar los productos');
}

miFuncion();