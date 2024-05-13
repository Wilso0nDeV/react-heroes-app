import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { Navbar } from "../ui";
import { HeroesRoutes } from "./../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
       {/* 1era forma de hacerlo */}
        {/* <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        /> */}

       {/* 2da forma de hacerlo : de este modo podemos definir varias rutas publicas*/}

        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />}></Route>
                {/* <Route path="/otra-ruta" element={<OtraPage />}></Route> */}
              </Routes>
            </PublicRoute>
          }
        ></Route>

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
