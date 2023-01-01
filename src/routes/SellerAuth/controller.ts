import { Request, Response } from "express"
import { sign } from "jsonwebtoken"
import { SellerSchema } from "./schema"
import { compare } from "bcrypt"


// handler for seller signup 
export const handleSignUp = async (req: Request, res: Response) => {

    // fetching seller details
    const { name, email, number, address, password } = req.body

    // checking if fields are empty or not. Returning error message if fields are empty
    if ( name == "" || email == "" || number == "" || address == "" ) 
        return res.json({ success: false, message: "Required fields missing" })

    // checking if user with the same email exists or not. Returning error if a user with same email already exists
    const sellerExists = await SellerSchema.findOne({ email })
    if ( sellerExists ) return res.json({ success: false, message: "Seller with same email already exists" })

    try {

        // Saving details to database
        const seller = await SellerSchema.create({ name, email, number, address, password })

        // getting doc id
        const id = seller.toObject()._id.toString()

        // creating payload object
        const payload = { id, name, email, number, address }

        // creating token
        const authtoken = sign(payload, process.env.JWT_SECRET as string)

        // sending token
        res.json({ success:true, authtoken })

    }

    catch (err) { res.json({ success: false, message: err }) }

}


// handler for seller signin
export const handleSignIn = async (req: Request, res: Response) => {

    // getting email, password from user
    const { email, password } = req.body

    // checking if fields are empty or not. Returning error message if fields are missing
    if ( email == "" || password == "" ) return res.json({ success: false, message: "Missing fields" })

    // checking if user exists or not, if not then showing error message
    const seller = await SellerSchema.findOne({ email })
    if (!seller) return res.json({ success: false, message: "Invalid Credentials" })

    // checking if password is correct or not. Returning error message if password is wrong
    const match = await compare(password, seller.password)
    if (!match) return res.json({ success: false, message: "Invalid Credentials" })

    // getting seller details
    const { _id, name, number, address } = seller

    // creating payload
    const payload = { _id, name, email, number, address }

    // generating token
    const authtoken = sign(payload, process.env.JWT_SECRET as string)

    // sending token
    res.json({ success: true, authtoken })

}
