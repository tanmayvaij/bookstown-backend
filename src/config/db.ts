import { connect, set } from "mongoose"

set('strictQuery', true)

const connectDB = () => {

    connect(process.env.MONGO_URI as string, (err) => {
        (err) ? console.log(err) : console.log("successfully connected to database")
    })

}

export default connectDB
