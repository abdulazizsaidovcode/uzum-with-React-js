import buttonimg from "../../../../assets/btnimg.png"
function NavbarButton() {
    const button = {
        borderRadius: "5px",
        width: "130px",
        height: "40px",
        color: "#7101ff",
        padding: "8px",
    }
    return (
        <button style={button} className={`flex items-center justify-center bg-violet-100`}>
            <img className="h-full" src={buttonimg} alt="logobutton" />
            <p>Каталог</p>
        </button>
    )
}
export default NavbarButton 