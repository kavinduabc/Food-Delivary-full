import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { json } from "body-parser";
import jwt from "jsonwebtoken";

  export function userRejistration(req,res){

    //** get all the user data from user request body */
    const data = req.body;

    //** hashing the password  */
    data.password = bcrypt.hashSync(data.password,10)
    const newUser = new User(newUser)
    //** save the newUser  */
    newUser.save().then(()=>{
        res.json(
            {
              message:"User rejistred"
            }
        )
    }).catch(
        ()=>{
          res.status(500).json({
            error:"User rejistred faild"
          })
        }
    )
  }