import { Request, Response } from "express"

const handleListBook = (req: Request, res: Response) => {
    res.status(200).send("function handleListBook invoked")
}

export { handleListBook }
