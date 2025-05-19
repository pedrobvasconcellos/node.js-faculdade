import jwt from "jsonwebtoken";
import getToken from "./get-token.js";
const checkToken = (req, res, next)=> {
    const token = getToken(req);
    if(!token)
    {
        return res.status(401).json({message:"Acesso Negado", authenticated: false});
    }
    try
    {
        const verified = jwt.verify(token, "meusegredo");
        req.user = verified;
        next();
    }
    catch(error)
    {
        return res.status(400).json({message:"Token Inválido", authenticated: false});
    }
}
export default checkToken;