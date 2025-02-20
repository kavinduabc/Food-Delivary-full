import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import foodRouter from "./routes/foodRoute.js";
import dotenv from "dotenv"


dotenv.config()
//** create a variable for call the express */
const app =express()

//** create a database connection  */
const mongoURL = process.env.MONGO_URL
mongoose.connect(mongoURL)
const connection = mongoose.connection

connection.once("open",()=>{
    console.log("Mongodb connection is successfuly")
})

//** api endpoints */
app.use("/api/food",foodRouter)

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
   res.send("API Working")
})
//** to run the express server */
app.listen(4000,()=>{
    console.log("server is running on port 4000")
})

