import '../columnaDerecha.css'

function TodoSearch() {
    return(
        <div className="search-container">
            <i className="fas fa-search"></i>
            <input className="to-do-search"
            placeholder="Busca tus tareas aquí..."
            onChange={(event) => {
                console.log("Escribiste en el buscador")
                console.log(event);
                console.log(event.target);
                console.log(event.target.value); //Imprime el valor ingresado por el usuario
            }}
            />
        </div>
    );
}

export { TodoSearch };