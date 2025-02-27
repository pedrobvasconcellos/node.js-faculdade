//1//
import express from 'express';
import cors from 'cors';
//11//
import routes from './Routers/User/routes.js';
////
const app = express();
//mensagem json
app.use(express.json);
//cors (front-end)
app.use(cors({
    ceredentials: true,
    origin: 'http://localhost:3000'
}));
//10//
app.use("/user", routes);
////
app.listen(5000);
////