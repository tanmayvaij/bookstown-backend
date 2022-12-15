import express from "express"
import { config } from "dotenv"
import connectDB from "./db"

import sellerRouter from "./routes/Seller"

config()

const app = express()
const PORT = (process.env.PORT || 5000) as number

app.use("/api/book", sellerRouter)

const start = async () => {

    try {

        connectDB()

        app.listen(PORT, () => {
            console.log("Server started succesfully")
        })
        
    }

    catch (err) {
        console.log(err)
    }
    
}

start()
