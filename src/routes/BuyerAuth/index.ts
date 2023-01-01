import { Router } from "express"
import { handleSignIn, handleSignUp } from "./controller"

const router = Router()

router.route('/signin').post(handleSignIn)

router.route('/signup').post(handleSignUp)

export default router
