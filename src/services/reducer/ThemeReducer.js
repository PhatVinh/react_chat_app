import { ThemeAction } from '../actions';

const {DARK_THEME_ACTION, LIGHT_THEME_ACTION} = ThemeAction;
const ThemeReducer = (state, action) =>  {
    switch (action) {
        case DARK_THEME_ACTION:
            return 'theme-mode-dark';
        case LIGHT_THEME_ACTION: 
            return 'theme-mode-light';
        default:
            throw new Error("Invalid action!!!");
    }
}

export default ThemeReducer;