import { Router } from "express";
import { fetchUser, checkUser } from "../controllers/user.js";
const userRouter = Router()

userRouter.route('/signup').post(fetchUser)
userRouter.route('/login').post(checkUser)

export default userRouter;