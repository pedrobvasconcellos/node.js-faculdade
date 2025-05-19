import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../context/UserContext";
function Header(){
    const {authenticated, logout} = useContext(Context);
    return(
       <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
            <h2>meu pet sumiu</h2>
        </div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            {authenticated ?(
                <>
                    <li>
                        <Link to="/create">Achados e Perdidos</Link>
                        
                    </li>
                    <li><Link to="/listPet">Pets</Link></li>
                    <li onClick={logout}>Sair</li>
                </>
            ):(
                <>
                    <li>
                        <Link to="/login">Entrar</Link>
                    </li>
                    <li>
                        <Link to="/register">Cadastre-se</Link>
                    </li>
                </>
            )}
            
        </ul>
       </nav>
    )
}
export default Header;