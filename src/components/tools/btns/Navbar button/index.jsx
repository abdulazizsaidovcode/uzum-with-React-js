import buttonimg from "../../../../assets/btnimg.png"
function NavbarButton() {
    const button = {
        border: "2px solid #7101ff ",
        borderRadius: "10px",
        width: "160px",
        height: "50px",
        color: "#7101ff"
    }
    return (
        <button style={button} className={`flex item-end`}>
            <img className="h-full" src={buttonimg} alt="logobutton" />
            <p>Каталог</p>
        </button>
    )
}
export default NavbarButton 