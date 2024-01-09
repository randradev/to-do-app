import React from 'react';
import './errores.css'

function ErrorToDoDuplicado({ message, onClose }) {
  return (
    <div className="errorduplicado-container">
        <div className='errorduplicado-contenido'>
            <h1 className='errorduplicado-title'>¡Ups!</h1>
            <p className="errorduplicado-message">La tarea que ingresaste ya existe.</p>
            <button className="errorduplicado-closebutton" onClick={onClose} type="button" >
                Cerrar
            </button>
        </div>
    </div>
  );
}

export default ErrorToDoDuplicado;