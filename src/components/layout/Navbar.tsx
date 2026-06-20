import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Navbar.css"
import { useContext } from "react";


function Navbar() {

  const usercontext = useContext(UserContext);

  return (
    <nav className="navbar">
      <h2>Mi Aplicación, Bienvenido {usercontext?.user?.name},
         usted es un {usercontext?.user?.rol}</h2>
       <Link to="/users">
            Usuarios
        </Link>
    </nav>
  );
}

export default Navbar;