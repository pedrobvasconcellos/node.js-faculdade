//5//
//8//import mongoose from 'mongoose'
import mongoose from '../db/conn.js';
////
const {Schema}=mongoose;
const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    }
});
const User = mongoose.model('User.js', userSchema);
export default User;
////