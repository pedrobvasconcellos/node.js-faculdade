import jwt from "jsonwebtoken";
import User from "../models/User.js";
const getUserByToken = async(token)=>{
    if(!token)
    {
        return res.status(401).json({message:"Acesso Negado"});
    }
    const decode = jwt.verify(token, "meusegredo");
    const userid = decode.id;
    const user = await User.findOne({_id:userid});
    return user;
}
export default getUserByToken;