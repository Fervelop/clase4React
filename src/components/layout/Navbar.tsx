import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Navbar.css"
import { useContext } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";


function Navbar() {

  // const usercontext = useContext(UserContext);
  const user = useSelector((state:RootState) => state.user.user)

  return (
    <nav className="navbar">
      <h2>Mi Aplicación, Bienvenido {user?.name},
         usted es un {user?.rol}</h2>
       <Link to="/users">
            Usuarios
        </Link>
    </nav>
  );
}

export default Navbar;