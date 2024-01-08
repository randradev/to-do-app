import { useState, useEffect } from "react";

// custom hook para el manejo de local storage
function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);

            let parsedItem;

            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
                setItem(parsedItem);
            }

            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return { item, saveItem, loading, error };
}

export { useLocalStorage };