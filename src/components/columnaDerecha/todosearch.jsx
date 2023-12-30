import '../columnaDerecha.css'

function TodoSearch() {
    return(
        <div className="search-container">
            <i className="fas fa-search"></i>
            <input className="to-do-search" placeholder="Busca tus tareas aquí..." />
        </div>
    );
}

export { TodoSearch };