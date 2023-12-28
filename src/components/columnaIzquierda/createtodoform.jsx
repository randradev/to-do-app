function CreateToDoForm() {
    return(
        <form>
            <div className="form-group">
                <label className="create-to-do-form-label">Nombre de la tarea</label>
                <input className="create-to-do-form-input" placeholder="Escribe tu nueva tarea aquí" />
            </div>
        </form>
    );
}

export { CreateToDoForm }