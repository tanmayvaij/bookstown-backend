import { Router } from "express"
import { handleSignIn, handleSignUp } from "./controller"
import { hashPassword } from "./middleware"

const router = Router()

router.route('/signin').post(handleSignIn)

router.route('/signup').post(hashPassword, handleSignUp)

export default router
