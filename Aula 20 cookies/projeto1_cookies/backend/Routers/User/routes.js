import{Router} from "express";
import UserController from "../../controllers/UserController.js";
import verifyToken from "../../helpers/verify-token.js";
const routes = Router();
routes.post('/Register', UserController.register);
routes.post('/Login', UserController.login);
routes.post('/Logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: "Logout com sucesso" });
});
routes.post('/Check', verifyToken, (req, res) => {
    res.status(200).json({ message: "Usuário autenticado", authenticated: true, user: req.user });
});
export default routes;