import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav className="nav">
            <NavLink to="/">
                Bet
            </NavLink>
            <NavLink to="/bets/new">
                Form
            </NavLink>
        </nav>
    )

}

export default NavBar