import pet from "../models/Pet.js";

async function getAllPetsUser(userId){
    try{
        const pets = await pet.find({ "user._id": userId });
        return pets;
    } catch (error) {
        throw new Error("Errro ao buscar pets do usuário");
    }
}

export default getAllPetsUser;