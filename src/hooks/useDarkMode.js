import {useState, useEffect} from "react";
import useLocalStorage from './useLocalStorage.js';


export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkToggle');
};