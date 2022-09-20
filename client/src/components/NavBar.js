import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav className="nav">
            <NavLink to="/">
                Bet
            </NavLink>
            <NavLink to="/AddBet">
                Form
            </NavLink>
        </nav>
    )

}

export default NavBar