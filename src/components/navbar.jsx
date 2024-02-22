import logo from "../assets/Uzum logo.png";
import NavbarButton from "./tools/btns/Navbar button";
import NavbarInput from "./tools/inputs/navinput";
function Navbar() {
    return (
        <nav className="w-full h-12 py-3">
            <div className="container flex items-center">
                    <img className="h-10" src={logo} alt="" />
                <div className="flex items-center">
                    <NavbarButton/>
                </div>
                <div className="flex items-center">
                    <NavbarInput/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;