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
            <button className="dark-mode" onClick={toggleDarkMode}>
                {isDarkMode ? "Light Mode": "Dark Mode"}
            </button>
        </nav>
    )
}

