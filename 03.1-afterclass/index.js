//INICIACION DEL DESAFIO ENTRGEGABLE

// Consigna

// Realizar una clase “ProductManager” que gestione un conjunto de productos.
// Te acercamos esta ayuda 👉
// Hands on lab sobre creación de clases (clase 1)

// Aspectos a incluir

// Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.


// title
// description
// price
// thumbnail
// code
// stock

// class Productos {
//     constructor(
//         title,
//         description,
//         price,
//         thumbnail,
//         code,
//         stock
//     ) {
//         this.title=title;
//         this.description=description;
//         this.price=price;
//         this.thumbnail=thumbnail;
//         this.code=code;
//         this.stock=stock;
//     }
// }


class ProductManager {

    constructor() {
        this.products = []
    }

    addProduct(title, description, code) {
        //[1000...]  for of recorre los mil y te informa
        //[1000...]  include busca recorre solo un producto
        if (title && description && code) {
            const isExistCode = this.products.map(p => p.code).includes(code);
            if (isExistCode) {
                console.log('codigo existente')
            } else {
                this.products.push({
                    id: this.products.lenght,
                    title,
                    description,
                    code
                })
            }
        } else {
            console.log('falto ingresar algunos de los valores')
        }

    }

}

const productManager = new ProductManager()
productManager.addProduct('title','description','codigo')