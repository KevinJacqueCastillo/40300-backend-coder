const fs = require('fs');

const writeFile = (path, Products) =>
  fs.promises.writeFile(path, JSON.stringify({ products: Products }));

const readFile = async (path) => {
  const GetProducts = await fs.promises.readFile(path, { encoding: 'utf-8' });
  const Result = JSON.parse(GetProducts);
  return Result;
};

class ProductManager {
  constructor(path) {
    this.Product = [];
    this.path = path;
  }
  CreateFile = async () => {
    const File = fs.existsSync(this.path);

    if (File) {
      console.log('Ya existe el archivo');
      const { products } = await readFile(this.path);
      this.Product = products;
    } else {
      await writeFile(this.path, this.Product);
      console.log('Archivo creado con éxito!');
    }
  };

  addProduct = async ({
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
  }) => {
    if (title && description && price && thumbnail && code && stock) {
      const RepeatedCode = this.Product.map((code) => code.code).includes(code);
      if (RepeatedCode) {
        console.log('Código repetido');
      } else {
        this.Product.push({
          id: this.Product.length,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        });
        await writeFile(this.path, this.Product);
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
    const { products } = await readFile(this.path);
    const FindIndex = products.findIndex((element) => element.id === id);
    if (FindIndex !== -1) {
      const newArrayProducts = products.filter((product) => product.id !== id);
      await writeFile(this.path, newArrayProducts);
      console.log('Producto eliminado correctamente');
    } else {
      console.log('No se encontró Producto');
    }
  };
}
const Product = new ProductManager('./assets/product.json');
module.exports = Product;
