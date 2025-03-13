//6//
import User from '../models/User.js';
////
//12*//
import Argon2 from 'argon2';
//*//
//14*//
import createUserToken from "../helpers/create-token.js";
//*//
//3//
export default class UserController{
    static async register(req, res){
        //res.json({message: "Olá"});
        //12//
        const {name, email, phone, password, confirmpassword} = req.body;
        if(!name)
        {
            res.status(422).json({message: "Nome é obrigatório"});
            return;
        }
        if(!email)
        {
            res.status(422).json({message: "Email é obrigatório"});
            return;
        }
        if(!phone)
        {
            res.status(422).json({message: "Telefone é obrigatório"});
            return;
        }
        if(!password)
        {
            res.status(422).json({message: "Senha é obrigatória"});
            return;
        }
        if(!confirmpassword)
        {
            res.status(422).json({message: "Confirme a senha"});
            return;
        }
        if(password !== confirmpassword)
        {
            res.status(422).json({message: "Senhas não conferem"});
            return;
        }
        //verificar se já existe um usuário com o email informado
        try {
            const userExist = await User.findOne({email: email});
            if(userExist)
            {
                return res.status(422).json({message: "Email já cadastrado"});
            }
            //criptografar a senha antes de salvar
            const passwordhash = await Argon2.hash(password,{
                type: Argon2.argon2id,
                memoryCost: 2**16,
                parallelism: 1
            });
            //sarvar o usuário
            const user = new User({
                name,
                email,
                phone,
                password: passwordhash
            });
            try{
                const newUser = await user.save();
                //token se for logar após o registro do usuário descomentar a linha abaixo
                //await createUserToken(userExist, req, res);
                return res.status(201).json({message: "Usuário inserido com sucesso", newUser});
            }catch(error){
                return res.status(500).json({message: "Problema ao inserir o usuário"});
            }

        } catch (error) {
            return res.status(500).json({message: "Tente novamente mais tarde"});
        }
        ////
    }
    static async login(req, res){
        //13//
        const{email, password} = req.body;
        if(!email)
            {
                res.status(422).json({message: "Email é obrigatório"});
                return;
            }
        if(!password)
            {
                res.status(422).json({message: "Senha é obrigatória"});
                return;
            }
            const userExist = await User.findOne({email: email});
            if(!userExist)
            {
                return res.status(422).json({message: "Credenciais inválidas"});
            }
            //verificar a senha
            const checkPassword = await Argon2.verify(userExist.password, password);
            if(!checkPassword)
            {
                return res.status(422).json({message: "Credenciais inválidas"});
            }
            //gerar token(create-token.js)
            await createUserToken(userExist, req, res);

        ////
    }
}
////