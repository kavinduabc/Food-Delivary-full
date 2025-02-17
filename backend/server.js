import mongoose from "mongoose";
import express from "express"

//** create a variable for call the express */
let app =express()

//** create a database connection  */
const mongoURL = "mongodb+srv://admin:111@cluster0.paigr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoURL)
const connection = mongoose.connection

connection.once("open",()=>{
    console.log("Mongodb connection is successfuly")
})

//** running port  */
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})


