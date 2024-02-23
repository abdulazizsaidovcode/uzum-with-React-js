import { useState } from "react";
import logo from "../assets/Uzum logo.png";
import NavbarButton from "./tools/btns/Navbar button";
import NavbarInput from "./tools/inputs/navinput";
import categoryimg from "../assets/img//Cayegory/union.png"
import { Link } from "react-router-dom";


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

    return (
        <nav className="w-full h-max py-3 overflow-hidden">
            <div className="container flex items-center ">
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
                    <Link to='/wishes' className="flex">
                        <i class="ri-shopping-basket-line text-xl mr-2"></i>
                        <p>User name</p>
                    </Link>
                </div>
            </div>
            <div className="container categorys flex items-center gap-x-4 w-max overflow-hidden" >
                {category && category.map((item, index) => (
                    <div className="flex w-36 h-12 items-center py-2" key={index}>
                        <img src={item.img} alt="" className="w-6 h-6"/>
                        <p className="ml-1">{item.categoryname}</p>
                    </div>
                ))}

            </div>
        </nav>
    )
}
export default Navbar;