import { useEffect, useState } from "react";
import api from "../../utils/api";

function ViewPets() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        api.get("/pets/getAllPetsUser")
        .then((response) => {
            setPets(response.data.pets);
        })
        .catch((error) => {
            console.error("Erro ao buscar pets do usuário", error);
        });
    }, []);

    return(
        <section>
            <h1>Meus Pets</h1>
            {pets.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Situação</th>
                            <th>Local</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pets.map((pet) => (
                            <tr key = {pet._id}>
                                <td>{pet.nome || "Sem nome"}</td>
                                <td>{pet.situacao}</td>
                                <td>{pet.local}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Você não possui pets cadastrados.</p>
            )}
        </section>
    )
}

export default ViewPets;