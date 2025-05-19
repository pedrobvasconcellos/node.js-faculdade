import mongoose from "../db/conn.js";
const {Schema}= mongoose;
const userSchema = new Schema({
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
        type: String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    }
});
const User = mongoose.model('User', userSchema);
export default User;