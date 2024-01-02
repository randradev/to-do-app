import { ColumnaDerecha } from "../principalColumnaDerecha/columnaDerecha";
import { ColumnaIzquierda } from "../principalColumnaIzquierda/columnaIzquierda";
import './mainbody.css'

function MainBody() {
    return(
        <div className="main-body-container">
            <ColumnaIzquierda className="columna-izquierda-main" />
            <ColumnaDerecha className="columna-derecha-main"/>
        </div>
    );
}

export { MainBody };