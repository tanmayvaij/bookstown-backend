import { Schema, model } from "mongoose"

const listedBookSchema = new Schema({
    
    bookname: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }

})

export default model('listedBook', listedBookSchema)
