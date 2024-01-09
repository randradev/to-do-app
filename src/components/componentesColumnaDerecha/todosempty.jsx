import React from "react";
import '../principalColumnaDerecha/columnaDerecha.css';

function TodosEmpty (){
    return (
        <div className="TodosEmpty-container">
            <p className="TodosEmpty-parrafo">¡El mejor momento para empezar es ahora!</p>
            <h3 className="TodosEmpty-titulo">Crea tu primera Tarea</h3>
        </div>
    );
}

export { TodosEmpty };