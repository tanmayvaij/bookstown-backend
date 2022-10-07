const VendorProduct = require('../models/Vendorproducts')

const router = require('express').Router()

router.post("/api/products/list_products", async (req, res) => {

    const product = new VendorProduct(req.body)
    const savedProduct = await product.save()

    res.json({savedProduct})

})

module.exports = router