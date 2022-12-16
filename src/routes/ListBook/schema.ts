import { Schema, model } from "mongoose"

const listedBookSchema = new Schema({
    
    book_id: {
        type: String,
        required: true
    },
    bookname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

})

export default model('listedBook', listedBookSchema)
