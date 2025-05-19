const getToken = (req)=>{
    const token = req.cookies.token;
    return token;
}
export default getToken;