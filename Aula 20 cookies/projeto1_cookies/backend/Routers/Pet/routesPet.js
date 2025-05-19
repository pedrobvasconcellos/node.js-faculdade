import{Router} from "express";
import PetController from "../../controllers/PetController.js";
import verifyToken from "../../helpers/verify-token.js";
import imageUpload from "../../helpers/image-upload.js";

const routesPet = Router();

routesPet.post('/Create',verifyToken, imageUpload.array("imagens"), PetController.create);
routesPet.get('/getAll', PetController.getAll);
routesPet.get('/getAllPetsUser', verifyToken, PetController.getAllPetsUser);
export default routesPet;