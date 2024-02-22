import logo from "../assets/Uzum logo.png";
import NavbarButton from "./tools/btns/Navbar button";
function Navbar() {
    return (
        <nav className="w-full h-12 py-3">
            <div className="container flex items-center">
                    <img className="h-10" src={logo} alt="" />
                <div className="flex items-center">
                    <NavbarButton/>
                    <h1>slaom</h1>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;