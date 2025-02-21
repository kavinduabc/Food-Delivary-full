import User from "../models/userModel.js";
import bcrypt from "bcrypt"

//** user rejistration function  */
export  function userRejistration(req,res)
{
   const data = req.body;
   data.password = bcrypt.hashSync(data.password,10)
   const newUser = new User(data)
   newUser.save().then(()=>{
    res.json(
        {
       message : "User registered successfully"
        }
    )
   }).catch((error)=>{
    res.status(500).json({error:"user registered faild"})
   })

}