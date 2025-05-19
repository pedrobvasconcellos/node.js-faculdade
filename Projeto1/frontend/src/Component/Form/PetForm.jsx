import Input from "./Input.jsx";
import Select from "./Select.jsx";
import {useState} from "react";
function PetForm ({handleSubmit, petData, btnText}){
    const [pet, setPet] = useState(petData || {});
    const [preview, setPreview] = useState([]);
    const situacao = ["Perdido", "Procurando Tutor"];
    const genero = ["Macho", "Fêmea"];
    const porte = ["Grande", "Médio", "Pequeno"];

    function onFileChange(e)
    {
        console.log(e.target.files);
        setPreview(Array.from(e.target.files));
        setPet({...pet,imagens:[...e.target.files]});
    }
    function handleChange(e)
    {
        setPet({...pet, [e.target.name]:e.target.value});
    }
    function handleSituacao(e){
        setPet({...pet, situacao:e.target.options[e.target.selectedIndex].text})
    }
    function handlePorte(e){
        setPet({...pet, porte:e.target.options[e.target.selectedIndex].text})
    }
    function handleGenero(e){
        setPet({...pet, genero:e.target.options[e.target.selectedIndex].text})
    }
    function submit(e){
        e.preventDefault();
        console.log(pet);
        handleSubmit(pet);
    }
    return(
        <form onSubmit={submit}>
            <div>
            {
                preview.length > 0
                ?preview.map((image,index)=>(
                    <img src={URL.createObjectURL(image)}
                    alt={pet.nome}
                    key={`${pet.nome}+${index}`}
                    />
                ))
                :pet.imagens &&
                 pet.imagens.map((image, index)=>(
                    <img src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                    alt={image}
                    key={`${pet.nome}+${index}`}
                    />
                 ))
            }
            </div>
            <Input
                text =  "Imagens do Pet"
                type = "file"
                name = "imagens"
                handleOnChange = {onFileChange}
                multiple={true}
            />
            <Input
                text =  "Nome"
                type = "text"
                name = "nome"
                handleOnChange = {handleChange}
                value = {pet.nome || ""}
            />
             <Input
                text =  "Idade"
                type = "text"
                name = "idade"
                handleOnChange = {handleChange}
                value = {pet.idade || ""}
            />
             <Input
                text =  "Raça"
                type = "text"
                name = "raca"
                handleOnChange = {handleChange}
                value = {pet.raca || ""}
            />
             <Input
                text =  "Cor Predominante"
                type = "text"
                name = "corPredominante"
                handleOnChange = {handleChange}
                value = {pet.corPredominante || ""}
            />
             <Input
                text =  "Cor dos Olhos"
                type = "text"
                name = "corOlhos"
                handleOnChange = {handleChange}
                value = {pet.corOlhos || ""}
            />
             <Input
                text =  "Espécie"
                type = "text"
                name = "especie"
                handleOnChange = {handleChange}
                value = {pet.especie || ""}
            />
            <Select
                name="genero"
                text = "Gênero"
                options = {genero}
                handleOnChange = {handleGenero}
                value={pet.genero || ""}
            />
            <br></br>
            <Select
                name="porte"
                text = "Porte"
                options = {porte}
                handleOnChange = {handlePorte}
                value={pet.porte || ""}
            />
            <Input
                text =  "Local"
                type = "text"
                name = "local"
                handleOnChange = {handleChange}
                value = {pet.local || ""}
            />
            <Input
                text =  "Ponto de Referência"
                type = "text"
                name = "pontoReferencia"
                handleOnChange = {handleChange}
                value = {pet.pontoReferencia || ""}
            />
            <Input
                text =  "Data"
                type = "date"
                name = "data"
                handleOnChange = {handleChange}
                value = {pet.data || ""}
            />
            <Input
                text =  "Recompensa"
                type = "text"
                name = "recompensa"
                handleOnChange = {handleChange}
                value = {pet.recompensa || ""}
            />
            <Select
                name="situacao"
                text = "Situação"
                options = {situacao}
                handleOnChange = {handleSituacao}
                value={pet.situacao|| ""}
            />
            <br></br>
            <input type="submit" value={btnText}/>
        </form>
    )
}
export default PetForm;
