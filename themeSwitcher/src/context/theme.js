import {useContext , createContext } from 'react'

export const ThemeContext = createContext({
    themeMode : 'light',
    darkMode : () => {},
    lightMode : () => {},
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
//in production we use this format so we do not need to create 2 files for context and context provider