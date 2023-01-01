import { Request, Response } from "express"
import { ListedBookSchema } from "./schema"

export const handleListBook = async (req: Request, res: Response) => {

    const book = await ListedBookSchema.create({
        bookname: req.body.bookname,
        desc: req.body.desc,
        price: req.body.price,
        image_url: process.env.HOST_STATIC_PATH! + req.file?.filename
    })

    res.status(200).json({ book })

}
