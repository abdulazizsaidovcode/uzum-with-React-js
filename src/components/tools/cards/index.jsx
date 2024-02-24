




function ProductCard({img, describtion, comments, rate, monthpay, price, oldprice}) {

    return (
        <div className="pb-10">
            <div className="w-full h-full hover:shadow-md  overflow-hidden rounded-md">
                <div className='w-full h-max relative overflow-hidden'>
                    <img className='w-full h-84 bg-contain hover:scale-105 transition-all' src={img} alt="Image 1" />
                    <button className="absolute bottom-0 left-0 bg-violet-700 text-white rounded-md px-3">Акция</button>
                </div>
                <div className="product-description p-3">
                    <p className="text-sm">{describtion}</p>
                    <div className="flex ">
                        <p><i class="ri-star-fill text-yellow-400 mr-1"></i>`{comments}`</p>
                        <p>{rate}</p>
                    </div>
                    <p>{monthpay}</p>
                    <p>{price}</p>
                    <p>{oldprice}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;