
import uzumbasket from "../../../assets/icons/uzum-basket.png"
import heart from "../../../assets/icons/heart.png"



function ProductCard({ img, describtion, comments, rate, monthpay, price, oldprice }) {

    return (
        <div className="mb-10 cursor-pointer">
            <div className="w-full h-full hover:shadow-md overflow-hidden rounded-md">
                <div className='w-full h-80 relative overflow-hidden'>
                    <img className='w-full h-full bg-contain hover:scale-105 transition-all' src={img} alt="Image 1" />
                    <button className="absolute bottom-0 left-0 bg-violet-700 text-white rounded-md px-3">Акция</button>
                    <button className=" absolute w-8 h-8 top-2 right-2 text-xl"><img src={heart} class="ri-heart-line"/></button>
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
                        <button className="w-10 h-10 rounded-full border "><img src={uzumbasket} alt="" className="w-full hover:bg-gray-100 p-1 transition-all rounded-full" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;