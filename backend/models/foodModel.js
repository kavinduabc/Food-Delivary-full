import mongoose from "mongoose";

//** create a schema for food model property */
const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type : String,
        required : true
    },
    price :{
        type: Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    catogory:
    {
        type : String,
        required:true
    }
    
});

const Food =mongoose.models.food || mongoose.model("food",foodSchema);

export default Food;