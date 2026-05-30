import { Link } from "react-router-dom";
import "./Navbar.css"


function Navbar() {
  return (
    <nav className="navbar">
      <h2>Mi Aplicación</h2>
       <Link to="/users">
            Usuarios
        </Link>
    </nav>
  );
}

export default Navbar;