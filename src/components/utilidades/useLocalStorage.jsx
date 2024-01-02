import { useState } from "react";

//custom hook para el manejo de local storage
function useLocalStorage(itemName, initalValue) {
    
    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;

    if(!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initalValue));
        parsedItem = initalValue;
    } else {
        parsedItem = JSON.parse(localStorageItem)
    }

    const [item, setItem] = useState(parsedItem);

    //Guardar en el local storage
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return [item, saveItem]
}

export { useLocalStorage }