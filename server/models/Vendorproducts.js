const { Schema, model } = require('mongoose')

const VendorproductsSchema = new Schema({
    product: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    vendorid: {
        required: true,
        type: String
    }
})

const VendorProduct = model('vendorproduct', VendorproductsSchema)

module.exports = VendorProduct
