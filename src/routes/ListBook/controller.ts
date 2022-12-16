import { Request, Response } from "express"
import listBook from "./schema"

const handleListBook = async (req: Request, res: Response) => {

    try {
        const book = new listBook(req.body)
        const savedBook = await book.save()
        res.status(200).json(savedBook)
    }
    catch (err) {
        console.log(err)
    }

}

export { handleListBook }
