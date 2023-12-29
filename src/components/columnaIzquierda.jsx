import { CreateTodoButton } from "./columnaIzquierda/createtodobutton";
import { CreateToDoForm } from "./columnaIzquierda/createtodoform";
import { CreateToDoTitle } from "./columnaIzquierda/createtodotitle";


function ColumnaIzquierda(){
    return(
        <div className="container-columna-izquierda">
            <CreateToDoTitle />
            <CreateToDoForm />
            <CreateTodoButton />
            <img src="ilustracion.svg" className="ilustracion1" alt="to-do-illustration"></img>
        </div>
    );
}

export { ColumnaIzquierda }