import { useState, useEffect } from "react";

//custom hook para el manejo de local storage
function useLocalStorage(itemName, initalValue) {
    
    const [item, setItem] = useState(initalValue);

    //Estado de carga
    const [loading, setLoading] = useState(true);

    //Estado de error
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
    
                let parsedItem;
    
                if(!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initalValue));
                    parsedItem = initalValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem);
                }
                setLoading(false);
    
            } catch(error) {
                setLoading(false);
                setError(true);
            }
        }, 5000);
    });

    //Guardar en el local storage
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {item,
        saveItem,
        loading,
        error,}
}

export { useLocalStorage }