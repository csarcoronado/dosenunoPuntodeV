import React from "react";
import NuevoPresupuesto from "./new";

const Header = ({ presupuesto, setPresupuesto }) => {
    return (
        <header>
            <h1> Punto de Venta</h1>
            <NuevoPresupuesto
               presupuesto={presupuesto}
               setPresupuesto={setPresupuesto}
            />
        </header>
    )
}
export default Header