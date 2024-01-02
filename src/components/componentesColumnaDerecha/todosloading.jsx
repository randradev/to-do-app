function TodosLoading() {
    const text = "Cargando...";
  
    return (
      <div className="loading-container">
        <div className="loading-text">
          {[...text].map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
        <div className="loading-icon"></div>
      </div>
    );
  }  

export { TodosLoading };
