import { useEffect, useState } from "react";
import logo from "../assets/img/Uzum logo.png";
import NavbarButton from "./tools/btns/Navbar button";
import NavbarInput from "./tools/inputs/navinput";
import categoryimg from "../assets/img//Cayegory/union.png"
import { Link } from "react-router-dom";
import axios from "axios";
import { Api } from "../api/api";
import RegisterModal from "./tools/modals/register";


const Categorys = [
    {
        id: 1,
        categoryname: "Рассрочка",
        img: categoryimg
    },
    {
        id: 2,
        categoryname: "Рассрочка",
        img: categoryimg
    },
    {
        id: 3,
        categoryname: "Рассрочка",
        img: categoryimg
    },
    {
        id: 4,
        categoryname: "Рассрочка",
        img: categoryimg
    },
    {
        id: 5,
        categoryname: "Рассрочка",
        img: categoryimg
    },
    {
        id: 7,
        categoryname: "Рассрочка",
        img: categoryimg
    },
    {
        id: 8,
        categoryname: "Рассрочка",
        img: categoryimg
    },
    {
        id: 9,
        categoryname: "Рассрочка",
        img: categoryimg
    },
    {
        id: 10,
        categoryname: "Рассрочка",
        img: categoryimg
    },
    {
        id: 11,
        categoryname: "Рассрочка",
        img: categoryimg
    },
    {
        id: 12,
        categoryname: "Рассрочка",
        img: categoryimg
    },
]
function Navbar() {
    const [category, setCategory] = useState(Categorys)
    const [wishes, setWishes] = useState([])
    const [cart, setCart] = useState([])
    const [regmodalOpen, setRegModalOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

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

    const [categorys, getCategory] = useState()
    function getCategorys() {
        axios.get(Api + "category")
            .then((res) => {
                getCategory(res.data)
            }).catch((err) => {
                console.error("navbar wishes olishda hatolik" + err)
            })
    }

    return (
        <nav className="w-full h-max py-3 overflow-hidden">
            <div className="container flex items-center ">
                <Link to="/">
                    <img className="h-10" src={logo} alt="" />
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
                    <div className="absolute -top-72 w-full h-screen shadow flex flex-col gap-x-5 bg-red-200">
                        {categorys && categorys.map((item, index) => (
                            <Link to={`/category/${item.categoryname}`} key={index}>
                                <div className="flex items-center gap-2 justify-between w-full h-12 px-4 py-2">
                                    <div dangerouslySetInnerHTML={{ __html: item.url }} />
                                    <p className="ml-1">{item.categoryName}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <div className="container categorys flex items-center gap-x-4 w-max overflow-hidden" >
                {category && category.map((item, index) => (
                    <div className="flex w-36 h-12 items-center py-2" key={index}>
                        <img src={item.img} alt="" className="w-6 h-6" />
                        <p className="ml-1">{item.categoryname}</p>
                    </div>
                ))}

            </div>
        </nav>
    )
}
export default Navbar;