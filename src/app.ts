import express from "express"
import { config } from "dotenv"
import path from "path"
import connectDB from "./config/db"

import ListBook from "./routes/ListBook"

config()

const app = express()
const PORT = (process.env.PORT || 5000) as number

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/static', express.static(path.join(__dirname, 'uploads')))

app.use("/api/book", ListBook)

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
