import { CreateTodoButton } from "./columnaIzquierda/createtodobutton";
import { CreateToDoForm } from "./columnaIzquierda/createtodoform";
import { CreateToDoTitle } from "./columnaIzquierda/createtodotitle";


function ColumnaIzquierda(){
    return(
        <div>
            <CreateToDoTitle />
            <CreateToDoForm />
            <CreateTodoButton />
        </div>
    );
}

export { ColumnaIzquierda }