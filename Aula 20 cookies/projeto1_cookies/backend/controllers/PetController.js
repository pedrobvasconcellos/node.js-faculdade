import Pet from "../models/Pet.js";
import getToken from "../helpers/get-token.js";
import getUserByToken from "../helpers/get-user-by-token.js";
import getAllPetsUser from "../models/getAllPetsUser.js";

export default class PetController{
    static async create(req, res){
        const{nome, idade, raca,corPredominante, corOlhos, especie, genero, porte, local,pontoReferencia, data, recompensa,situacao,comentario} = req.body;
        const imagens = req.files;
        console.log(imagens);
        if(!corPredominante)
        {
            res.status(422).json({message:"Preencha a cor predominante do pet"});
            return;
        }
        
        if(imagens.length === 0)
        {
            res.status(422).json({message:"Escolha uma imagem para o pet"});
            return;
        }
        const token =  getToken(req);
        const user = await getUserByToken(token);

        const pet = new Pet({
            nome,
            idade, 
            raca,
            corPredominante, 
            corOlhos, 
            especie, 
            genero, 
            porte, 
            local,
            pontoReferencia, 
            data, 
            recompensa,
            situacao,
            comentario,
            user:{
                _id:user._id,
                name:user.name,
                phone:user.phone,
                email:user.email
            },
            imagens:[],
        });
        imagens.map((image) =>{
            pet.imagens.push(image.filename);
        });

        try {
            const newPet = await pet.save();
            res.status(200).json({message:'Pet cadastrado com sucesso!', newPet});
            
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }
    static async getAll(req, res) {
        const pets = await Pet.find({ situacao: { $ne: "Finalizado" } }).sort("-createdAt");
        res.status(200).json({ pets });
    }

    static async getAllPetsUser(req, res) {
        try{
            const token = getToken(req);
            const user = await getUserByToken(token);

            const pets = await getAllPetsUser(user._id);
            res.status(200).json({pets});
        } catch (error) {
            res.status(500).json({ message: "Erro as buscar pets dos usuários" + error.message });
        }
    }
}