import { useState } from "react"
import buttonimg from "../../../../assets/icons/btnimg.png"

function NavbarButton() {
    const button = {
        borderRadius: "5px",
        width: "130px",
        height: "40px",
        color: "#7101ff",
        padding: "8px",
    }
    const [navButton, openNavButtom] = useState(false)

    function openNavList() {
        openNavButtom(!navButton)
    }
    return (
        <>
            <button  style={button} className={`flex items-center justify-center bg-violet-100`}>
                <img className="h-full" src={buttonimg} alt="logobutton" />
                <p>Каталог</p>
            </button>
            {navButton && (
                <div className="absolute top-0 w-20 h-20 bg-red-500">
                    salom
                </div>
            )}
        </>


    )
}
export default NavbarButton 