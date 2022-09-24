const { Schema, model } = require('mongoose')

const VendorSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    number: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
})

const Vendor = model('vendor', VendorSchema)

module.exports = Vendor
