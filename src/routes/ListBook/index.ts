import { Router } from "express"
import { handleListBook } from "./controller"

const router = Router()

router.route('/listbook').get(handleListBook)

export default router
