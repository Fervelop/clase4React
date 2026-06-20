import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Button from "../components/ui/Button";
import { useContext } from "react";

function Login() {
  const navigate = useNavigate();

 const usercontext = useContext(UserContext);

  const handleLogin = () => {

      const userInfo = {

      name: "Cristian",
      email: "cristian@test.com",
      rol: "Admin"
    };

    usercontext?.login(userInfo);

    navigate("/dashboard");
  };

  return (
    <div className="page">
      <div className="login-card">
        <h1>Bienvenido</h1>

        <input
          type="email"
          placeholder="Correo electrónico"
        />

        <input
          type="password"
          placeholder="Contraseña"
        />

        <Button
          text="Ingresar"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}

export default Login;