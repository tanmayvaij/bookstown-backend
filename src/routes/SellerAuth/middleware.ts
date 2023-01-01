import { genSalt, hash } from "bcrypt"
import { Request, Response, NextFunction } from "express"

export const hashPassword = async (req: Request, res: Response, next: NextFunction) => {

    const { password, cpassword } = req.body

    if ( password == "" || cpassword == "" || password != cpassword )
        return res.json({ success: false, message: "Passwords missing or mismatch" })

    const salt = await genSalt(10)
    const hashedPassword = await hash(password, salt)

    req.body.password = hashedPassword

    next()

}
