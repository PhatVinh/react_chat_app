import ThemeContext from "./ThemeContext";
import { useReducer } from "react";
import { ThemeReducer } from "../../reducer";

const ThemeContextProvider = ({ children }) => {
    const initState = localStorage.getItem('theme-mode') || 'theme-mode-light';
    const [theme, dispatch] = useReducer(ThemeReducer, initState);

    return (
        <ThemeContext.Provider value={[theme, dispatch]}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider