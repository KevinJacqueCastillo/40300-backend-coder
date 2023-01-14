


const getProducts = async (req, res) => {
    const limite = req.query.limit
    if (limite == undefined && limite == 0) {
        let productos = await Product.getProducts();
        res.send(productos)
    }
    res.send(productos)
    let productos = await Product.getProducts(limite);
}

module.exports = {
    getProducts
}