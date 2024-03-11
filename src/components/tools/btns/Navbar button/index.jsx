import buttonimg from "../../../../assets/icons/btnimg.png"

function NavbarButton({ toggleNav, isNavOpen }) {
    const button = {
        borderRadius: "5px",
        width: "130px",
        height: "40px",
        color: "#7101ff",
        padding: "8px",
    };

    return (
        <button onClick={toggleNav} style={button} className="flex items-center justify-center bg-violet-100">
            {!isNavOpen ? <img className="h-full" src={buttonimg} alt="logobutton" /> : <i class="ri-close-line text-xl"></i>}
            <p>Каталог</p>
        </button>
    );
}

export default NavbarButton;
