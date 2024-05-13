import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";




export const LoginPage = () => {

  //*Aqui estoy obteniendo los valores del Conext "AuthContext"
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()
  const onLogin = () => {

    const lasPath = localStorage.getItem('lastPath') || '/'

    login('Wilson Vasquez');

    navigate(lasPath,{
      replace: true
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
