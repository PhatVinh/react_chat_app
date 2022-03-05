const ThemeReducer = (state, action) =>  {
    switch (action) {
        case "DARK_THEME":
            return 'theme-mode-dark';
        case "LIGHT_THEME": 
            return 'theme-mode-light';
        default:
            throw new Error("Invalid state!!!");
    }
}

export default ThemeReducer;