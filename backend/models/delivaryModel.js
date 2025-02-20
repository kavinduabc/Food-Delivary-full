import mongoose from "mongoose";

const delivarySchema = mongoose.Schema({
    firstname :{
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required :true
    },
    email : {
        type : String,
        required : true,
        default:true
    },
    address : {
        type : String,
        required : true,
        default:true  
    },
    phone : {
        type : String,
        required : true,
        default : true
    }

})

const Deliavry = mongoose.model("Delivary",delivarySchema);

export default Deliavry;