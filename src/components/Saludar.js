import React from "react";
// Props
export default function Saludar(props){
    //Asignacion por Destructuring
    const {userInfo, saludarfn} = props;
    const {nombre = "usuario", edad = "0"} = userInfo;
    console.log(userInfo);
    //console.log(saludarfn);
    
    return (
        <div>
            <button onClick={() => saludarfn(nombre,edad)}>
                Saludar
            </button>
        </div>
    )

    // () => Para esperar que se de click al boton 
}