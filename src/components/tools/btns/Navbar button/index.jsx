import { useEffect, useState } from "react"
import buttonimg from "../../../../assets/icons/btnimg.png"
import axios from "axios";
import { Api } from "../../../../api/api";
import { Link } from "react-router-dom";

function NavbarButton({ toggleNav, isNavOpen }) {
    const button = {
        borderRadius: "5px",
        width: "130px",
        height: "40px",
        color: "#7101ff",
        padding: "8px",
    };
    
    
    return (
        <>
            <button onClick={toggleNav} style={button} className="flex items-center justify-center bg-violet-100">
                <img className="h-full" src={buttonimg} alt="logobutton" />
                <p>Каталог</p>
            </button>
        </>
    );
}

export default NavbarButton;
