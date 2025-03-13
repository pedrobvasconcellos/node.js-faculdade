//2//
import { Router } from "express";
//4//
import UserController from "../../controllers/UserController.js";
////
const routes = Router();
routes.post('/Register', UserController.register);
routes.post('/Login', UserController.login);
////
//9//
export default routes;
////
