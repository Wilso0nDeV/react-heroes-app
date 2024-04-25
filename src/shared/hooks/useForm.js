import { useState } from "react";

export const useForm = (formInitialState) => {

  //*formInitialState : Es el objeto inicial que recibo de mi formulario
  //*basciamente es cada campo de mi formulario en un objeto

  const [formState, setFormState] = useState(formInitialState);
 //*formState : es mi estado inicial y el que se modificara
 //*setFormState : es el que actualiza mi estado "formState"
  // const { username, email, password } = formState;

  //*Funcion que manipula los inputs, recibe el target y mediante este obtengo el name y value del input
  //*con estos datos puedo actualizar mi estado.
  const handleValueInput = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  //*Funcion para resetar mi  formulario
  const handleResetButton = () => {
    setFormState(formInitialState);
  };


  //*Retorno todo lo que necesito
  return {
    ...formState,
    formState,
    handleValueInput,
    handleResetButton,
  };
};
