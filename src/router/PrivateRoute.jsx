


import React, { useContext } from 'react'
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

    const { logged }= useContext(AuthContext);

    //*useLocation : hook para obtener el path y cualquier busqueda que se haga(query ejemplo : '?q=batman' )
    const {pathname, search } = useLocation()   

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath)

  return (logged) ? children : <Navigate to ='/login' />
}
