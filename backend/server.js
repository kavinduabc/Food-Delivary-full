import mongoose from "mongoose";
import express from "express"
import cors from "cors"

//** create a variable for call the express */
const app =express()

//** create a database connection  */
const mongoURL = "mongodb+srv://admin:111@cluster0.paigr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoURL)
const connection = mongoose.connection

connection.once("open",()=>{
    console.log("Mongodb connection is successfuly")
})

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

