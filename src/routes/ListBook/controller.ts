import { Request, Response } from "express"
import { ListedBookSchema } from "./schema"

export const handleListBook = async (req: Request, res: Response) => {

    const book = new ListedBookSchema({
        bookname: req.body.bookname,
        desc: req.body.desc,
        price: req.body.price,
        image_url: process.env.HOST_STATIC_PATH! + req.file?.filename
    })

    const savedBook = await book.save()

    res.status(200).json(savedBook)

}
