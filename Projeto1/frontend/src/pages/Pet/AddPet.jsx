import PetForm from "../../Component/Form/PetForm.jsx";
import useFlashMessage from "../../hooks/useFlashMessage";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import api from "../../utils/api.jsx";
import styles from "../../Component/Form/Form.module.css";
function AddPet(){
    const [token] = useState(localStorage.getItem("token") || "");
    const navigate = useNavigate();
    const {setFlashMessage} = useFlashMessage();
    async function registerPet(pet){
        let msgType = "success";
        let data;
        const formData = new FormData();
        Object.keys(pet).forEach((key)=>{
            if(key === "imagens"){
                for(let i = 0; i < pet[key].length; i++)
                {
                    formData.append("imagens", pet[key][i]);
                }
            }
            else{
                formData.append(key, pet[key]);
            }
        })
        try{
            const response = await api.post("pets/create", formData,{
                headers:{Authorization:`Bearer ${JSON.parse(token)}`,
                "Content-Type":"multipart/form-data"}
            })
            data = response.data;
        }
        catch(err)
        {
            msgType = "error";
            data = err.response?.data || {message:"Erro desconhecido"};
        }
        finally{
            setFlashMessage(data.message, msgType);
            if(msgType !== "error")
            {
                navigate("/");
            }
        }
    }
    return(
        <section className={styles.form_container}>
            <div>
                <h1>Cadastre o Pet</h1>
            </div>
            <PetForm handleSubmit = {registerPet} btnText="Cadastrar"/>
        </section>
    )
}
export default AddPet;