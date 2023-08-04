import React from "react";
import { DarkModeContext } from "./DarkMode";

export default function NavBar(){
    const {isDarkMode, toggleDarkMode} = React.useContext(DarkModeContext);
    return (
        <nav className="navigation-menu">
            <ul className="navigation-liste">
                <li><a href="/">Startseite</a></li>
                <li><a href="/about">Über uns</a></li>
                <li><a href="/contact">Kontakt</a></li>
            </ul>
            <button onClick={toggleDarkMode}>
                {isDarkMode ? "Switch to Light Mode": "Switch to Dark Mode"}
            </button>
        </nav>
    )
}

