import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Auth/Login/index.jsx";
import Register from "./pages/Auth/Register/index.jsx";
import Header from "./Component/Header/index.jsx";
import Footer from "./Component/Footer/index.jsx";
import Container from "./Component/Container/index.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import Message from "./Component/Message/index.jsx";
import AddPet from "./pages/Pet/AddPet.jsx";
import ListPet from "./pages/Pet/ListPet/index.jsx";
import RemovePet from "./pages/Pet/RemovePet.jsx";

function AppRoutes(){
    return(
        <BrowserRouter>
         <UserProvider>
            <Header/>
            <Message/>
            <Container>
                <Routes>
                   
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/create" element={<AddPet/>}/>
                    <Route path="/listPet" element={<ListPet/>}/>
                    <Route path="/excluir/:id" element={<RemovePet/>}/>
                   
                </Routes>
            </Container>
            <Footer/>
            </UserProvider>
        </BrowserRouter>
    )
}
export default AppRoutes;
