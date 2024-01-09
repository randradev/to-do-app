import { React } from "react";
import { CreateToDoForm } from "../componentesColumnaIzquierda/createtodoform";
import { CreateToDoTitle } from "../componentesColumnaIzquierda/createtodotitle";
import './columnaIzquierda.css';

function ColumnaIzquierda(){

    return(
        <div className="container-columna-izquierda">
            <CreateToDoTitle />
            <CreateToDoForm />
            <img src="ilustracion-to-do-app.png" className="ilustracion1" alt="to-do-app-illustration" ></img>
        </div>
    );
}

export { ColumnaIzquierda }