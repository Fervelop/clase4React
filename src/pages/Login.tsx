import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Button from "../components/ui/Button";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";

function Login() {
  const navigate = useNavigate();

 // const usercontext = useContext(UserContext);
  const dispatch = useDispatch()
  const handleLogin = () => {

      const userInfo = {

      name: "Cristian",
      email: "cristian@test.com",
      rol: "Admin"
    };

    // usercontext?.login(userInfo);
    dispatch(login(userInfo));

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