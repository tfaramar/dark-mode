import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    //useState will take an initial value, and then return an updated value and a function to change that value. We pass in a callback to set the initial value for useState.
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        //if item is defined, return the item parsed. otherwise, use the initial value.
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        setStoredValue(value); 
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};


export default useLocalStorage;