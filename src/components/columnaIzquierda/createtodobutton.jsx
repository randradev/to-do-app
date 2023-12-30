function CreateTodoButton() {
    return (
        <div className="button-container">
            <button className="create-to-do-button"
                    onClick={
                        (event) => {
                            console.log("botón cliqueado")
                            console.log(event)
                            console.log(event.target)
                            }
                    }>
                Crear Tarea <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    );
}

export { CreateTodoButton };