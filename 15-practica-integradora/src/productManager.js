const fs = require('fs');

const writeFile = (path, Products) =>
  fs.promises.writeFile(path, JSON.stringify({ products: Products }));

class ProductAssetsManager {
  constructor(path) {
    this.path = path;
  }
  CreateFile = async () => {
    await writeFile(this.path, this.Product);
  };
}
const ProductAssets = new ProductAssetsManager('./assets/product.json');
module.exports = ProductAssets;
