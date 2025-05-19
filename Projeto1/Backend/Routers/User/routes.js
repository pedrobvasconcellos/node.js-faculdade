import{Router} from "express";
import UserController from "../../controllers/UserController.js";
const routes = Router();
routes.post('/Register', UserController.register);
routes.post('/Login', UserController.login);
export default routes;