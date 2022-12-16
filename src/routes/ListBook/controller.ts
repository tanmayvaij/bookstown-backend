import { Request, Response } from "express"
import listBook from "./schema"
import multer from "multer"

const Storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: Storage }).single("imageFile")

const handleListBook = (req: Request, res: Response) => {

    upload(req, res, async (err) => {

        if (err) console.log(err)
        
        else {

            const book = new listBook({
                bookname: req.body.bookname,
                desc: req.body.desc,
                price: req.body.price,
                image: { 
                    data: req.file!.filename,
                    contentType: "image/png"
                }
            })

            const savedBook = await book.save()
            res.status(200).json(savedBook)

        }

    })
    
}

export { handleListBook }
