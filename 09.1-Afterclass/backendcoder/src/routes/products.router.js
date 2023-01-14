const { Router } = require("express");
const { getProducts } = require("../controller/products.controller");

const router = Router()
const Product = require("../productManager");

router.get("/", getProducts)


router.get("/:pid", async (req, res) => {
    const pid = req.params.pid
    let product = await Product.getProductById(pid);
    if (product == null) {
        res.send("Producto no encontrado,intente nuevamente")
    } else {
        res.send(product)

    }
})

module.exports = router;