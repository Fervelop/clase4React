import { Link } from "react-router-dom";
import "./Navbar.css"

interface NavbarProps {
  userName: string;
}


function Navbar({userName} : NavbarProps) {
  return (
    <nav className="navbar">
      <h2>Mi Aplicación, Bienvenido {userName}</h2>
       <Link to="/users">
            Usuarios
        </Link>
    </nav>
  );
}

export default Navbar;