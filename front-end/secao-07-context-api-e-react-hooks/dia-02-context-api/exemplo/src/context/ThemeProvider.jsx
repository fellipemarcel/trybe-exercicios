import PropTypes from "prop-types"
import { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }) {
    const [themeColor, setThemeColor] = useState('dark');
    const toggleTheme = () => {
        setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
    };
    return (
        <ThemeContext.Provider
            value={{
                color: themeColor,
                developer: 'Fellipe',
                toggleTheme,
            }}>
            <div className={`app ${themeColor}`}>
            {children}
            </div>
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
  children: PropTypes.any
}

export default ThemeProvider;