import { React, useContext } from "react";
import { CreateTodoButton } from "../componentesColumnaIzquierda/createtodobutton";
import { CreateToDoForm } from "../componentesColumnaIzquierda/createtodoform";
import { CreateToDoTitle } from "../componentesColumnaIzquierda/createtodotitle";
import { ToDoContext } from "../utilidades/toDoContext";
import './columnaIzquierda.css';

function ColumnaIzquierda(){
    const {
        addToDo
    } = useContext(ToDoContext);

    return(
        <div className="container-columna-izquierda">
            <CreateToDoTitle />
            <CreateToDoForm />
            {/* <CreateTodoButton /> */}
            <img src="ilustracion.svg" className="ilustracion1" alt="to-do-illustration"></img>
        </div>
    );
}

export { ColumnaIzquierda }