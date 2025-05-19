import api from "../utils/api";
import useFlashMessage from "./useFlashMessage.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
    const {setFlashMessage} = useFlashMessage();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token)
        {
            api.defaults.headers.Authorization  = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
    },[])
    async function register(user){
        let msgText = "Cadastro realizado com sucesso";
        let msgType = "success";
    try
    {
            const response = await api.post('users/Register', user); 
            navigate("/login");
            return response.data;
        
    }
    catch (error) {
        msgText = error.response.data.message;
        msgType = "error";
    }
    finally {
        
        setFlashMessage(msgText, msgType);
    }
}//function
    async function login(user){
        let msgText = "Login com sucesso";
        let msgType = "success";
        try {
            const response = await api.post('users/Login', user); 
            console.log(response.data);
            await authUser(response.data);
            navigate("/");
            return response.data;
        } catch (error) {
            msgText = error.response.data.message;
            msgType = "error";
        }
        finally {
           
            setFlashMessage(msgText, msgType);
        }
    }
    async function authUser(data)
    {
        setAuthenticated(true);
        localStorage.setItem("token", JSON.stringify(data.token));
        
    }
    async function logout(){
        let msgText = "Logout com sucesso";
        let msgType = "success";
        setAuthenticated(false);
        localStorage.removeItem("token");
        api.defaults.headers.Authorization = undefined;
        navigate("/");
        setFlashMessage(msgText, msgType);
    }
    return {register, login, logout, authenticated};
}//export