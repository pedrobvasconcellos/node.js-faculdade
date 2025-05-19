import styles from "../../../Component/Form/Form.module.css";
import { useState, useContext } from "react";
import Input from "../../../Component/Form/Input.jsx";
import {Context} from "../../../context/UserContext.jsx";
import login from "../../../hooks/useAuth.jsx";
function Login(){
    const [user,setUser] = useState({});
    const {login} = useContext(Context);
    function handleSubmit(e){
        e.preventDefault();
        //console.log(user);
        login(user);
    }
    function handleChange(e){
        setUser({...user, [e.target.name]:e.target.value});
    }
    return(
        <section className={styles.form_container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    handleOnChange={handleChange}
                />
                
                <input type="submit" value="Enviar" />
            </form>
        </section>
    )
}
export default Login;