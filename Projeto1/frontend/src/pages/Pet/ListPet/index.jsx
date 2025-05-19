import { Link } from 'react-router-dom';
import api from "../../../utils/api";
import { useEffect, useState } from "react";
import styles from "./ListPet.module.css";

function ListPet() {
  const [pets, setPets] = useState([]);
  //const [error, setError] = useState('');
  const token = localStorage.getItem("token");

  /*useEffect(() => {
    async function fetchPets() {
      try {
        const response = await api.get("pets/getAllUser", {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          }
        });
        
        setPets(response.data);
        
      } catch (err) {
        setError(err.response?.data?.message || "Erro desconhecido");
      }
    }

    fetchPets();
  }, [token]); // depende do token
*/
useEffect(() => {
    api
      .get('/pets/getAllUser', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets)
      })
  }, [token])
  //if (error) return <p className="text-red-500">{error}</p>;
  
  return (
    <table className={styles.pet_table}>
      <thead>
        <tr className={styles.pet_header}>
          <th>Nome</th>
          <th>Espécie</th>
          <th>Idade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        
        {pets.map((pet) => (
          
          <tr key={pet._id}>
            
            <td>{pet.nome}</td>
            <td>{pet.especie}</td>
            <td>{pet.idade}</td>
            <td>
              <Link to={`/editar/${pet._id}`} className={styles.link_editar}>Alterar</Link>
              <Link to={`/excluir/${pet._id}`} className={styles.link_excluir}>Excluir</Link>
            </td>
          </tr>
        )
        )}
      </tbody>
    </table>
  );
}

export default ListPet;
