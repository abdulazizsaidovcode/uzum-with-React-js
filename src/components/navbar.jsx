import { useEffect, useState } from "react";
import logo from "../assets/img/Uzum logo.png";
import NavbarButton from "./tools/btns/Navbar button";
import NavbarInput from "./tools/inputs/navinput";
import categoryimg from "../assets/img//Cayegory/union.png"
import { Link } from "react-router-dom";
import axios from "axios";
import { Api } from "../api/api"; 
import RegisterModal from "./tools/modals/register";



function Navbar() {
    const [wishes, setWishes] = useState([])
    const [cart, setCart] = useState([])
    const [regmodalOpen, setRegModalOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false); 
    const [categorys, getCategory] = useState()
    const [sortcategory, setSortCategory] = useState() 

    // ------ ******* opent and off nav menu ******* ------ ///
    const toggleNav = () => setIsNavOpen(!isNavOpen);

    // --------- ****** get product full description  ******** --------- //
    useEffect(() => {
        axios.get(Api + "product")
            .then((res) => {
                setWishes(res.data.filter((item) => item.wishes))
                setCart(res.data.filter((item) => item.cart))
            }).catch((err) => {
                console.error("navbar wishes olishda hatolik" + err)
            })  
    })


    useEffect(() => {
        getCategorys()
    }, [])

    function getCategorys() {
        axios.get(Api + "category")
            .then((res) => {
                getCategory(res.data)
                setSortCategory(res.data.slice(0, 8))
            }).catch((err) => {
                console.error("navbar wishes olishda hatolik" + err)
            })
    }

    return (
        <nav className="w-full h-max py-3 ">
            <div className="container flex items-center ">
                <Link to="/">
                    <img className="h-10" src={logo} alt="logo" />
                </Link>
                <div className="flex items-center ml-6">
                    <NavbarButton toggleNav={toggleNav} isNavOpen={isNavOpen} />
                </div> 
                <div className="flex items-center ml-5 w-[40%]">
                    <NavbarInput /> 
                </div>
                <div className="ml-6 flex items-center justify-between w-[40%]">
                    <div className="flex items-center hover:bg-gray-200 py-3 px-1 rounded-lg">
                        <i class="ri-user-line text-xl mr-2"></i>
                        <p onClick={() => setRegModalOpen(true)} className=" rounded transition-colors duration-300">Мои заказы</p>
                        {regmodalOpen && <RegisterModal isOpen={regmodalOpen} onClose={() => setRegModalOpen(false)} />}
                    </div>
                    <Link to='/wishes' className="flex items-center hover:bg-gray-200 py-3 px-2 rounded-lg">
                        <i class="ri-heart-line text-xl mr-2"></i>
                        <p>  Избранное  </p>
                        {wishes.length > 0 && <button className="w-6 h-6 text-white bg-purple-600 ml-2 rounded-lg">{wishes.length}</button>}
                    </Link>
                    <Link to="/cart" className="flex items-center hover:bg-gray-200 py-3 px-2 rounded-lg">
                        <i class="ri-shopping-basket-line text-xl mr-2"></i>
                        <p> Корзина </p>
                        {cart.length > 0 && <button className="w-6 h-6 text-white bg-purple-600 ml-2 rounded-lg">{cart.length}</button>}
                    </Link>
                </div>
            </div>

            <div className="relative container">
                {isNavOpen && (
                    <div className="flex w-full absolute z-30 flex-row shadow-2xl ">
                        <div className=" w-2/6 h-max  flex flex-col gap-x-5 bg-white">
                            {categorys && categorys.map((item, index) => (
                                <Link to={`/category/${item.categoryname}`} key={index}>
                                    <div className="flex items-center justify-between gap-2  w-full h-12 px-4 py-2">
                                        <div className="flex items-center">
                                            {item.url ? <div dangerouslySetInnerHTML={{ __html: item.url }} /> : <img src={Api + item.img} alt="" className="w-7" />}
                                            <p className="ml-1 hover:text-purple-600">{item.categorytext}</p>
                                        </div>
                                        <i class="ri-arrow-right-s-line text-3xl"></i>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="md:w-5/6 bg-white p-5 relative">
                            <button onClick={toggleNav} className=" absolute top-5 right-5 rounded-full hover:bg-gray-200 flex justify-center items-center w-8 h-8"><i class="ri-close-line text-3xl"></i></button>
                        </div>
                    </div>
                )}
            </div>
            <div className="container flex items-center justify-between gap-x-4 overflow-hidden" >
                {sortcategory && sortcategory.map((item) => (
                    <div className="flex h-12 items-center gap-2" >
                        {item.img && <img src={Api + item.img} alt="" className="w-6 h-6" />}
                        <p>{item.categorytext}</p>
                    </div>

                ))}
                <button onClick={toggleNav} className="flex items-center ml-2">Ещё <i class="ri-arrow-down-s-line"></i></button>
            </div>
        </nav>
    )
}
export default Navbar;