import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
    const theme = useContext(ThemeContext);
    const { color, toggleTheme } = theme;
    return (
        <header>
            <h1>App</h1>
            <button
            type="button"
            onClick={() => toggleTheme()}
            >
            {color === 'dark' ? '🌝' : '🌚'}
            </button>
        </header>
    )
}

export default Header;