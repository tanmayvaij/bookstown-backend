import { connect, set } from "mongoose"

set('strictQuery', true)

const connectDB = (): void => {
    return connect(process.env.MONGO_URI as string, () => {
        console.log("Connected to database successfully")
    })
}

export default connectDB
