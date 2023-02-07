const ProductsModel = require("../../../15-practica-integradora/src/models/products.model");






class ProductManager {
  
  

  addProduct = async ({
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
  }) => {
    if (title && description && price && thumbnail && code && stock) {
      
      //mongodb  => modelo => schema => collection => document findOne({code})
      if (RepeatedCode) {
        return false;
      } else {
        //crear el nuevo p
        const newProduct = await ProductsModel.create({
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        });
        console.log('Producto agregado con éxito');
      }
    } else {
      console.log('Campo faltante');
    }
  };

  getProducts = async function (limit) {
    if (limit == undefined) {
      const data = await readFile(this.path);
      return data;
    } else {
      const { products } = await readFile(this.path);
      const arrayFiltrado = products.slice(0, limit);
      return arrayFiltrado;
    }
  };

  getProductById = async (id) => {
    const { products } = await readFile(this.path);

    // 1000 => 1000 validacion
    // 1000 => 1 validacion
    const Product = products[id];

    if (Product) {
      return Product;
    } else {
      throw new Error('Producto no encontrado');
    }
  };

  UpdateProduct = async (id, Data) => {
    const FindIndex = this.Product.findIndex((element) => element.id === id);
    if (FindIndex !== -1) {
      const id = this.Product[FindIndex].id;
      this.Product[FindIndex] = {
        id,
        ...Data,
      };
      await writeFile(this.path, this.Product);
      console.log('Actualización Correcta');
    } else {
      console.log('No se encontró producto a Actualizar');
    }
  };

  deleteProduct = async (id) => {
    ProductsModel.deleteOne({_id:id})
  };
}
const Product = new ProductManager('./assets/product.json');
module.exports = Product;
