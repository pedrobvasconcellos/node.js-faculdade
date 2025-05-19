import mongoose from "../db/conn.js";
const {Schema}= mongoose;
const petSchema = new Schema({
    nome:{
        type:String
        
    },
    idade:{
        type:String
        
    },
    raca:{
        type: String
        
    },
    corPredominante:{
        type:String,
        required:true,
    },
    corOlhos:{
        type:String,
        required:true,
    },
    especie:{
        type:String,
        required:true,
    },
    genero:{
        type:String
        
    },
    porte:{
        type:String,
        required:true,
    },
    local:{
        type:String,
        required:true,
    },
    pontoReferencia:{
        type:String
        
    },
    data:{
        type:Date,
        required:true,
    },
    recompensa:{
        type:String
        
    },
    user:{
        type:Object,
        required:true,
    },
    situacao:{
        type:String,
        required:true,
    },
    imagens:{
        type:Array,
        required:true,
    },
    comentario:{
        type:String
        
    }
},{timestamps:true});
const Pet = mongoose.model('Pet', petSchema);
export default Pet;