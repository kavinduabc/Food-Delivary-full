import express from "express";
import { userRejistration } from "../controllers/userController.js";


const userRouter = express.Router(); 
 
userRouter.post("/",userRejistration)


export default userRouter;
