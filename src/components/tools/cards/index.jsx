
import uzumbasket from "../../../assets/icons/uzum-basket.png"
import { Link } from "react-router-dom";



function ProductCard({ img, describtion, comments, rate, monthpay, price, oldprice, discount, sale, imgWishes, setwishes, setcart }) {

    return (
        <div className="mb-10 cursor-pointer hover:shadow-md rounded-md relative">
            <button onClick={setwishes} className=" absolute z-20 w-8 h-8 top-2 right-2 text-xl">
                {imgWishes ?
                    <svg data-v-ff0a7354="" width="20" height="20" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" alt="like" class="ui-icon ">
                        <path d="M5.45 0.169434C8.01792 0.169434 9.5 2.32178 9.5 2.32178C9.5 2.32178 10.985 0.169434 13.55 0.169434C16.205 0.169434 18.5 2.23943 18.5 5.11943C18.5 9.34995 12.0604 13.7892 9.86509 15.7297C9.65819 15.9126 9.34179 15.9126 9.13488 15.7297C6.94056 13.7903 0.5 9.34976 0.5 5.11943C0.5 2.23943 2.795 0.169434 5.45 0.169434Z" fill="#8967F0"></path>
                    </svg> :
                    <svg data-v-ff0a7354="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" alt="like" class="ui-icon ">
                        <path d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z" fill="white" fill-opacity="0.8"></path>
                        <path d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z" fill="#15151A"></path>
                    </svg>}

            </button>
            <Link to="/product" className="w-full h-full overflow-hidden ">
                <div className='w-full h-80 relative overflow-hidden rounded-t-lg'>
                    <img className='w-full h-full bg-contain hover:scale-105 transition-all' src={img} alt="Image 1" />
                    {discount ?
                        <button className="absolute bottom-0 left-0 bg-violet-700 text-white rounded-md px-3">Акция</button>
                        : "salom"}
                    {sale ?
                        <button className={`${discount ? 'left-20' : "left-0"} absolute bottom-0  bg-pink-500 text-white rounded-md px-3`}>Распродажа</button>
                        : "salom"}
                </div>
                <div className="product-description p-3">
                    <p className="text-sm">{describtion}</p>
                    <div className="flex ">
                        <p><i class="ri-star-fill text-yellow-400 mr-1"></i>`{comments}`</p>
                        <p>{rate}</p>
                    </div>
                    <div className="bg-yellow-200 w-max px-2 text-xs mt-1 rounded-md">
                        <p>{monthpay} сум/мес</p>
                    </div>
                    <div className="w-full flex justify-between items-center mt-6">
                        <div>
                            <del className="text-gray-400 text-xs">{price} сум</del>
                            <p>{oldprice} сум</p>
                        </div>
                    </div>
                </div>
            </Link>
            <button onClick={setcart} className="w-10 h-10 absolute bottom-3 right-3  rounded-full border "><img src={uzumbasket} alt="" className="w-full hover:bg-gray-100 p-1 transition-all rounded-full" /></button>
        </div>
    )
}

export default ProductCard;