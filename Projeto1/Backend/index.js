import express from "express";
import cors from "cors";
import routes from "./Routers/User/routes.js";
import routesPet from "./Routers/Pet/routesPet.js";
const app = new express();
//mensagem json
app.use(express.json());
//cors frontend
app.use(cors({
    credentials:true, origin:"http://localhost:3000"
}))
app.use(express.static('public'));
app.use("/users", routes);
app.use("/pets", routesPet);

app.listen(5000);