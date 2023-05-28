import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Footer() {
    const theme = useContext(ThemeContext);
    const { color, developer } = theme;
    return (
        <footer>
            Tema atual: {color}. Desenvolvido por {developer}
        </footer>
    )
}

export default Footer;