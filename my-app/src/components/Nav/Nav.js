import React from "react";
import "./Nav.css"

function Nav(props) {
    return (
        <div className="Navbar text-center justify-content-center">Clicky Game
            <div className="scores text-right pr-3">Score: {props.score}</div>
            <div className="scores text-right pr-3 pb-2">Top Score: {props.topScore}</div>
        </div>
    )
}
export default Nav;