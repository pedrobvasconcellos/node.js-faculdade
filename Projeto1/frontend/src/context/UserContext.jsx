import { createContext } from "react";
import useAuth from "../hooks/useAuth.jsx";
const Context = createContext();
function UserProvider({children}){
    const {register, login, logout, authenticated} = useAuth();
    return <Context.Provider value={{register, login, logout, authenticated}}>{children}</Context.Provider>
}
export {Context, UserProvider};