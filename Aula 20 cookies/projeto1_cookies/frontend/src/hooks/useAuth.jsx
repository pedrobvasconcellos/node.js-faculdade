import api from "../utils/api.jsx";
import useFlashMessage from "./useFlashMessage.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
    const {setFlashMessage} = useFlashMessage();
    useEffect(()=>{
        api.post('/users/Check')
        .then(res => {
            setAuthenticated(true);
        })
        .catch(err => {
            setAuthenticated(false);
            navigate("/login");
        })
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
            //console.log(response.data);
            await authUser(response.data);
            setAuthenticated(true);
            navigate("/");
            return response.data;
        } catch (error) {
            msgText = error.response.data.message;
            msgType = "error";
            setAuthenticated(false);
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
        try{
            await api.post('/users/Logout');
            setAuthenticated(false);
            navigate("/");
        }catch(error){
            console.log("Erro ao fazer logout", error);
        }finally{
            setFlashMessage(msgText, msgType);
            navigate("/");
        }
    }
    return {register, login, logout, authenticated};
}//export