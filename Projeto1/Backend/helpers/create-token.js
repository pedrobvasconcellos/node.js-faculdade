import jwt from "jsonwebtoken";
import {promisify} from "util";
const signAsync = promisify(jwt.sign);
const createUserToken = async(user, req, res)=>{
    try
    {
        const token = await signAsync(
            {
            name:user.name,
            id:user._id
            },
            process.env.JWT_SECRET || "meusegredo",
            //{expiresIn:"1h"}
        );
        res.status(200).json({
            message: "Você está logado",
            token: token,
            userId: user._id
        });
    } 
    catch (error)
    {
       return res.status(500).json({message:"Erro ao gerar token",error});
    }
    
}
export default createUserToken;