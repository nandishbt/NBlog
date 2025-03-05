import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
       
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:''
    },

},{timestamps:true})


const User = mongoose.models.users || mongoose.model('User',userSchema)

export default User;