// Some top level imports
import express from "express"
import { config } from "dotenv"
import path from "path"
import connectDB from "./config/db"


// Importing routers from ./routes
import AuthRouter from "./routes/Auth"
import ListBookRouter from "./routes/ListBook"


// Initialized environment variables
config()


const app = express()
const PORT = (process.env.PORT || 5000) as number


// Express configurations
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/static', express.static(path.join(__dirname, 'uploads')))


// Using routers
app.use("/api/book", ListBookRouter)
app.use("/api/auth", AuthRouter)


// Starting the server
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
