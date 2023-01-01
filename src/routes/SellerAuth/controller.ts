import { Request, Response } from "express"
import { sign } from "jsonwebtoken"
import { SellerSchema } from "./schema"


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

        const seller = await SellerSchema.create({ name, email, number, address, password })

        const id = seller.toObject()._id.toString()

        const payload = { id, name, email, number, address }

        const authtoken = sign(payload, process.env.JWT_SECRET as string)

        res.json(authtoken)

    }

    catch (err) { res.json({ success: false, message: err }) }

}


export const handleSignIn = (req: Request, res: Response) => {

    

}
