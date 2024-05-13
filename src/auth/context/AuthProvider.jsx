import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// const initialState ={
//   logged : false
// }

const init = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user: user,
  };
};

//*AuthProvider : proveera la información que se encuentra en mi contexto a cualqueir parte de la aplicación
//* segun se solicite
export const AuthProvider = ({ children }) => {
  //*Mi reducer me va a permitir actualizar mi estado segun la acción que realice
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const onLogin = (name = "") => {


    const user = {
      id: "ABC",
      name: name,
    };
    const acction = {
      types: types.login,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(acction);
  };

  const onLogout = () => {

    localStorage.removeItem('user');

    const acction = {
      types: types.logout,
    };
    dispatch(acction);
  };

  return (
    // Envio mi funcion Onlogin que y mi estado "authState", esto me permitira proveer mi funcion y mis datos del estado
    //en toda la aplicación
    <AuthContext.Provider
      value={{ ...authState, login: onLogin, logout: onLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
