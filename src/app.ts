import express from "express"
import sellerRouter from "./routes/Seller"

const app = express()
const PORT = (process.env.PORT || 5000) as number

app.use("/api/book", sellerRouter)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started succesfully")
        })
    }
    catch (err) {
        console.log(err)
    }
}

start()
