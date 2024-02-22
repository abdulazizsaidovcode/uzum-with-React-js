import logo from "../assets/Uzum logo.png";
import NavbarButton from "./tools/btns/Navbar button";
import NavbarInput from "./tools/inputs/navinput";
function Navbar() {
    return (
        <nav className="w-full h-12 py-3">
            <div className="container flex items-center">
                <img className="h-10" src={logo} alt="" />
                <div className="flex items-center ml-6">
                    <NavbarButton />
                </div>
                <div className="flex items-center ml-5 w-[40%]">
                    <NavbarInput />
                </div>
                <div className="ml-6 flex items-center justify-between w-[40%]">
                    <div className="flex items-center">
                        <i class="ri-user-line text-xl mr-2"></i>
                        <p>User name</p>
                    </div>
                    <div className="flex">
                        <i class="ri-heart-line text-xl mr-2"></i>
                        <p>User name</p>
                    </div>
                    <div className="flex">
                        <i class="ri-shopping-basket-line text-xl mr-2"></i>
                        <p>User name</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;