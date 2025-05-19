import styles from "../../../Component/Form/Form.module.css";
import { useState, useContext } from "react";
import Input from "../../../Component/Form/Input.jsx";
import {Context} from "../../../context/UserContext.jsx";
import register from "../../../hooks/useAuth.jsx";
function Register(){
    const [user,setUser] = useState({});
    //faltou a linha abaixo
	const {register} = useContext(Context);
    function handleSubmit(e){
        e.preventDefault();
        //console.log(user);
        register(user);
    }
    function handleChange(e){
        setUser({...user, [e.target.name]:e.target.value});
    }
    return(
        <section className={styles.form_container}>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Celular"
                    type="text"
                    name="phone"
                    placeholder="Digite o celular"
                    handleOnChange={handleChange}
                />
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
                <Input
                    text="Confirma a Senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme a sua senha"
                    handleOnChange={handleChange}
                />
                <input type="submit" value="Cadastrar" />
            </form>
        </section>
    )
}
export default Register;