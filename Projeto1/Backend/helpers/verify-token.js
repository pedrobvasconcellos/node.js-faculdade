import jwt from "jsonwebtoken";
import getToken from "./get-token.js";
const checkToken = (req, res, next)=> {
    if(!req.headers.authorization)
    {
        return res.status(401).json({message:"Acesso Negado1"});
    }
    const token = getToken(req);
    if(!token)
    {
        return res.status(401).json({message:"Acesso Negado2"});
    }
    try
    {
        const verified = jwt.verify(token, "meusegredo");
        req.user = verified;
        next();
    }
    catch(error)
    {
        return res.status(400).json({message:"Token Inválido"});
    }
}
export default checkToken;