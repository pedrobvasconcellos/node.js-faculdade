import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "../../utils/api";

function RemovePet(){
    const {id} = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        async function excluirPet(){
            try{
                const response = await api.delete(`pets/${id}`, 
                    {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(token)}`,
                        }
                    }
                )
                navigate("/listPet");
            }catch(error){
                console.log("Erro ao excluir Pet", error);
                navigate("/listPet");
            }
        }
        excluirPet();
    }, [id, token, navigate]);
}
export default RemovePet;