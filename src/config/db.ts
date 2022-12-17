import { connect, set } from "mongoose"

set('strictQuery', true)

const connectDB = () => {
    connect(process.env.MONGO_URI as string)
        .then(()=>{
            console.log('success')
        })
        .catch((err)=>{
            console.log(err)
        })
}

export default connectDB
