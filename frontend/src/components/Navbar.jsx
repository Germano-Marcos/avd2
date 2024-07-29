import { NavLink } from "react-router-dom";

import logo_ete from "../assets/logo_ete.png"

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="block">
                <img src={logo_ete} alt="" />
            </div>
            <div className="block">
                <h2>Avaliação Diagnóstica</h2>
            </div>
        </nav>
    );
};

export default Navbar;